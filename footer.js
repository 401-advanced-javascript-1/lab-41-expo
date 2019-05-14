import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Footer(props) {
  return (
    <View>
      <Button title={props.title} onPress={props.nav} />
    </View>
  );
}
