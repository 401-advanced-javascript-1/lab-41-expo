import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(props) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{props.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    borderBottomWidth: 3,
    borderBottomColor: '#000',
    width: '100%'
  },
  headerText: {
    fontSize: 36,
    fontWeight: '800',
    textAlign: 'center'
  }
});
