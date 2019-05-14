import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Speech } from 'expo';
import Touchable from 'react-native-platform-touchable';

import AmountControlButton from './control-button.js';

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

export default class JohnFace extends React.Component {
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
      <View>
        <Touchable style={{ marginTop: 30 }} onPress={() => this._speak()}>
          <Image
            style={{
              width: 300,
              height: 400,
              borderWidth: 2,
              borderColor: '#000'
            }}
            source={require('./assets/johns/baldy.bmp')}
            disabled={this.state.inProgress}
            title="Speak"
          />
        </Touchable>
      </View>
    );
  }
}
