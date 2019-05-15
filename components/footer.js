import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function Footer(props) {
  return (
    // <View>
    <TouchableOpacity style={styles.button} onPress={props.nav}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
    // </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#000000',
    color: 'white',
    fontSize: 24,
    marginBottom: 50,
    padding: 20,
    top: 20,
    width: '100%'
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    borderRadius: 30,
    color: '#E0DBDB'
    // width: '100%'
  }
});
