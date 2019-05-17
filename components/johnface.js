import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Speech } from 'expo';
import Touchable from 'react-native-platform-touchable';

const JOHN_PHRASES = [
  'John is bald',
  "Your code sucks, but that's ok.",
  'Developers are lazy',
  "So, there's my really amazing app",
  "That's just gross.",
  'Just trust me, it works.',
  'But can you imagine a world where that might be the case?',
  "There's some magic going on there.",
  'Cards and decks baby!',
  'Everything on the internet is just cards and decks',
  'I used to work at this place called CDK',
  'Seriously? Come on!',
  'Mic? Drop.'
];

const JOHN_FACE_IMGS = [
  require('../assets/johns/baldy.bmp'),
  require('../assets/johns/baldy-magenta.bmp'),
  require('../assets/johns/baldy-mask.bmp'),
  require('../assets/johns/baldy-pastel.bmp'),
  require('../assets/johns/baldy-phantom.bmp'),
  require('../assets/johns/baldy-random.bmp'),
  require('../assets/johns/baldy-shaved.bmp'),
  require('../assets/johns/baldy-sunglasses.bmp'),
  require('../assets/johns/baldy-technicolor.bmp'),
  require('../assets/johns/baldy-jail.png'),
  require('../assets/johns/baldy-demon.png'),
  require('../assets/johns/baldy-bw.png')
];

export default class JohnFace extends React.Component {
  static navigationOptions = {
    title: 'Speech'
  };

  state = {
    currentJohnPhrase: JOHN_PHRASES[0],
    lastPhraseIndex: 0,
    lastImgIndex: 0,
    currentJohn: JOHN_FACE_IMGS[0],
    inProgress: false,
    language: 'en-CA',
    pitch: 0.8,
    rate: 1.06
  };

  _handlePress = () => {
    // Say the words with the current phrases
    this._speak();

    // Change the John face image
    let nextImgIndex =
      this.state.lastImgIndex + 1 >= JOHN_FACE_IMGS.length
        ? 0
        : this.state.lastImgIndex + 1;
    this.setState({
      currentJohn: JOHN_FACE_IMGS[nextImgIndex],
      lastImgIndex: nextImgIndex
    });

    // Change the current Johnism
    let nextPhraseIndex =
      this.state.lastPhraseIndex + 1 >= JOHN_PHRASES.length
        ? 0
        : this.state.lastPhraseIndex + 1;
    this.setState({
      currentJohnPhrase: JOHN_PHRASES[nextPhraseIndex],
      lastPhraseIndex: nextPhraseIndex
    });
  };

  _randomNumber = max => {
    // let randomNum = Math.floor(Math.random() * max);
    // if (randomNum === this.state.lastPhraseIndex) {
    //   this._randomNumber
    // }
    return Math.floor(Math.random() * max);
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

    Speech.speak(this.state.currentJohnPhrase, {
      language: this.state.language,
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
      <Touchable style={{ marginTop: 30 }} onPress={() => this._handlePress()}>
        <Image
          style={{
            width: 300,
            height: 400
          }}
          source={this.state.currentJohn}
          disabled={this.state.inProgress}
          title="Speak"
        />
      </Touchable>
    );
  }
}
