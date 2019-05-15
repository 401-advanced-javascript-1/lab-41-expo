import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { Constants, Speech } from 'expo';
import Touchable from 'react-native-platform-touchable';

export default class AmountControlButton extends React.Component {
  render() {
    return (
      <Touchable
        onPress={this.props.disabled ? null : this.props.onPress}
        hitSlop={{ top: 10, bottom: 10, left: 20, right: 20 }}
      >
        <Text
          style={{
            color: this.props.disabled ? '#ccc' : 'blue',
            fontWeight: 'bold',
            paddingHorizontal: 5,
            fontSize: 18
          }}
        >
          {this.props.title}
        </Text>
      </Touchable>
    );
  }
}
