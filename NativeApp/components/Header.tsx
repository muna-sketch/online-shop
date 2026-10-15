/* eslint-disable prettier/prettier */
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LittleLemonHeader = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Welcome to Little Lemon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 0.2,
    backgroundColor: '#F4CE14',
  },
  text: {
    padding: 40,
    fontSize: 30,
    color: 'black',
  },
});

export default LittleLemonHeader;
