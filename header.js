import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Header(props) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>John-ism App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: '800'
  },
  headerContainer: {
    borderBottomWidth: 3,
    borderBottomColor: '#000',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20
    // marginBottom: 20,
    // marginTop: 5
  }
});
