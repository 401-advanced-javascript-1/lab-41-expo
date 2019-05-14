import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
  something = () => {
    console.log('Pressed gallery button');
  };

  render() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>HEADER</Text>
        <Button title={this.props.title} onPress={this.props.nav} />
        {/* <Text style={styles.headerText}>Select a John-ism</Text>
        <Button disabled={false} onPress={this.something} title="Gallery" /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   paddingTop: 35
  // },
  // separator: {
  //   height: 1,
  //   backgroundColor: '#eee',
  //   marginTop: 0,
  //   marginBottom: 15
  // },
  headerText: {
    // fontSize: 18,
    // fontWeight: '600'
    // marginBottom: 5
  },
  headerContainer: {
    borderBottomWidth: 3,
    borderBottomColor: '#eee',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 0,
    marginTop: 20
  }
});
