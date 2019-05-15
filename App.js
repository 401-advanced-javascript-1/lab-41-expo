import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './screens/home/home-screen.js';
import GalleryScreen from './screens/gallery/gallery-screen.js';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Gallery: {
      screen: GalleryScreen
    }
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
