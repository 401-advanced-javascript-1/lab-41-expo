import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './home-screen.js';
import GalleryScreen from './gallery-screen';

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
    return (
      <AppContainer
        style={{
          borderWidth: 2,
          borderColor: 'green',
          backgroundColor: 'blue'
        }}
      />
    );
  }
}
