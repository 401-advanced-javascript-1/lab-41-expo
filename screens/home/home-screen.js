import React from 'react';
import { View } from 'react-native';

import Header from '../../components/header';
import JohnFace from '../../components/johnface';
import Footer from '../../components/footer';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          display: 'flex',
          height: '100%',
          justifyContent: 'space-between'
        }}
      >
        <Header content="Tap for a John-ism" />
        <JohnFace />
        <Footer
          title="Gallery"
          nav={() => this.props.navigation.navigate('Gallery')}
        />
      </View>
    );
  }
}
