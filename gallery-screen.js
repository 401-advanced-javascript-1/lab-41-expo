import React from 'react';
import { Button, Text, View } from 'react-native';

import Header from './header.js';

export default class GalleryScreen extends React.Component {
  render() {
    return (
      <View>
        <Header
          title="Home"
          nav={() => this.props.navigation.navigate('Home')}
        />
        <Text>Gallery Screen</Text>
        <Text>There are all sorts of John images in here!!!</Text>
        {/* <Button
          title="Go to Gallery... again"
          onPress={() => this.props.navigation.push('Gallery')}
        /> */}
        {/* <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        /> */}
      </View>
    );
  }
}
