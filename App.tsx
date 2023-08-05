import React, {useEffect, useState, useCallback} from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';

interface Post {
  id: number;
  author: string;
  authorId: number;
  likes: number;
  popularity: number;
  reads: number;
  tags: string[];
  title: string;
}

const BlogPost: React.FC<{post: Post}> = React.memo(({post}) => (
  <View>
    <Text style={{fontSize: 20, fontWeight: 'bold'}}>{post.title}</Text>
    <Text>Author: {post.author}</Text>
    <Text>Likes: {post.likes}</Text>
    <Text>Popularity: {post.popularity}</Text>
    <Text>Reads: {post.reads}</Text>
    <Text>Tags: {post.tags.join(', ')}</Text>
  </View>
));

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [tag, setTag] = useState<string>('tech');
  const [sortBy, setSortBy] = useState<string>('reads');
  const [direction, setDirection] = useState<string>('desc');

  const fetchPosts = useCallback(async () => {
    try {
      const queryParams = new URLSearchParams({
        tag,
        sortBy,
        direction,
      });

      const url = `https://api.hatchways.io/assessment/blog/posts?${queryParams.toString()}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const data = await response.json();

      // Sorting logic here...
      const sortedPosts = data.posts.slice().sort((a: Post, b: Post) => {
        if (sortBy === 'id') {
          return direction === 'asc' ? a.id - b.id : b.id - a.id;
        } else if (sortBy === 'likes') {
          return direction === 'asc' ? a.likes - b.likes : b.likes - a.likes;
        } else if (sortBy === 'reads') {
          return direction === 'asc' ? a.reads - b.reads : b.reads - a.reads;
        } else if (sortBy === 'popularity') {
          return direction === 'asc'
            ? a.popularity - b.popularity
            : b.popularity - a.popularity;
        }
        return 0;
      });

      setPosts(sortedPosts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }, [tag, sortBy, direction]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <View>
      <Text>Blog Posts</Text>
      <View>
        <Text>Available Tags:</Text>
        <Text>
          tech, health, startups, science, history, design, culture, politics
        </Text>
      </View>
      <View>
        <Text>Tag:</Text>
        <TextInput
          value={tag}
          onChangeText={value => setTag(value)}
          placeholder="Enter tags separated by comma"
        />
      </View>
      <View>
        <Text>Sort By:</Text>
        <TextInput
          value={sortBy}
          onChangeText={value => setSortBy(value)}
          placeholder="ID, Likes, Reads, Popularity"
        />
      </View>
      <View>
        <Text>Direction:</Text>
        <TextInput
          value={direction}
          onChangeText={value => setDirection(value)}
          placeholder="asc or desc"
        />
      </View>
      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <BlogPost post={item} />}
      />
    </View>
  );
};

export default App;
