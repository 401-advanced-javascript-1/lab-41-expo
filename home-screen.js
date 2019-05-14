import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { Constants, Speech } from 'expo';
import Touchable from 'react-native-platform-touchable';

import Header from './header.js';

const EXAMPLES = [
  { language: 'en-US', text: "Your code sucks, but that's ok." },
  { language: 'en', text: "That's just gross." },
  {
    language: 'en',
    text: 'But can you imagine a world where that might be the case?'
  },
  { language: 'en', text: 'Just trust me, it works.' },
  { language: 'en', text: 'Swish and flick.' }
];

class JohnFace extends React.Component {
  static navigationOptions = {
    title: 'Speech'
  };

  state = {
    selectedExample: EXAMPLES[0],
    inProgress: false,
    pitch: 1,
    rate: 0.75,
    john: [
      require('./assets/johns/baldy.bmp')
      // require('./assets/johns/baldy-magenta.bmp'),
      // require('./assets/johns/baldy-shaved.bmp')
    ]
  };

  _randomNumber = () => {
    return Math.floor(Math.random() * 7);
  };

  _updatePhoto = () => {
    return this.state.john[this._randomNumber()];
  };

  _speak = () => {
    const start = () => {
      this.setState({ inProgress: true });
    };
    const complete = () => {
      this.state.inProgress && this.setState({ inProgress: false });
    };

    Speech.speak(this.state.selectedExample.text, {
      language: this.state.selectedExample.language,
      pitch: this.state.pitch,
      rate: this.state.rate,
      onStart: start,
      onDone: complete,
      onStopped: complete,
      onError: complete
    });
  };

  render() {
    return (
      <Touchable onPress={() => this._speak()}>
        <Image
          style={{ width: 200, height: 200 }}
          source={require('./assets/johns/baldy.bmp')}
          disabled={this.state.inProgress}
          title="Speak"
        />
      </Touchable>
    );
  }
}

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Header
          title="Gallery"
          nav={() => this.props.navigation.navigate('Gallery')}
        />
        <Text>Home Screen</Text>
        <Text>There's a John image here that you can press!</Text>
        <JohnFace />
        {/* <Button
          title="Go to Gallery"
          onPress={() => this.props.navigation.navigate('Gallery')}
        /> */}
      </View>
    );
  }
}
