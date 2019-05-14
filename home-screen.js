import React from 'react';
import { Text, View } from 'react-native';
import { Constants, Speech } from 'expo';

import Header from './header.js';
import JohnFace from './johnface.js';
import Footer from './footer.js';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          borderWidth: 2,
          borderColor: 'red',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Header />
        {/* <Text>Home Screen</Text> */}
        {/* <Text>There's a John image here that you can press!</Text> */}
        <JohnFace />
        <Footer
          title="Gallery"
          nav={() => this.props.navigation.navigate('Gallery')}
        />
      </View>
    );
  }
}
