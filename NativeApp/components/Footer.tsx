/* eslint-disable prettier/prettier */
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**ONLY TRADITIONAL FUNCTION ALLOWED */
export default function LittleLemonFooter() {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>All rights reserved by Little Lemon, 2022 </Text>
    </View>
  );
}

/**Styles here */
const styles = StyleSheet.create({
  view: {
    backgroundColor: '#F4CE14',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
});
