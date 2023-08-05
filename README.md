# MyBlogReactNative App

This is a React Native application that fetches and displays a list of blog posts. You can filter the posts by tags and sort them by likes, reads, popularity, and ID in either ascending or descending order.

## App Overview

The main component of the app is `App.tsx`. This component manages state for the posts data, tag filter, sort by, and sort direction values. It also renders a form for updating these state values and a list of posts.

The `Post` interface is used to type the posts data. Each post has an id, author, authorId, likes, popularity, reads, tags, and title.

The `BlogPost` component is a memoized component that renders the details of a post. This component receives a post as a prop.

The list of posts is fetched from an API. The request URL includes query parameters for the tag, sort by, and sort direction values. The data received from the API is sorted before being set to state.

## Getting Started

Follow these instructions to run MyBlogReactNative App:

### Prerequisites

Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step before proceeding.

### Step 1: Start the Metro Server

First, you need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native. To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

### Step 2: Start App

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

#### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

#### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see the app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

You can also run the app directly from within Android Studio and Xcode respectively.

### Step 3: Modifying App

Now that you have successfully run the app, you can modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!
