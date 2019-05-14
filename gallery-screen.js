import React from 'react';
import { Button, Text, View } from 'react-native';

import Header from './header.js';
import Footer from './footer.js';

export default class GalleryScreen extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <Text>Gallery Screen</Text>
        <Text>There are all sorts of John images in here!!!</Text>
        <Footer
          title="Home"
          nav={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
