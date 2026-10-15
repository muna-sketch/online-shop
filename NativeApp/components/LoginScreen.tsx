/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Image,
  KeyboardAvoidingView,
  //   Alert,
} from 'react-native';

export default function LoginScreen() {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView keyboardDismissMode="on-drag">
        <Text style={styles.headerText}>Welcome to Bajeti Safi</Text>
        <Image
          source={require('./../assets/images/bajeti-Icon.png')}
          style={{ alignSelf: 'center', height: 100, width: 100 }}
        />

        <Text style={styles.regularText}>Login to continue</Text>
        <TextInput
          style={styles.inputBox}
          value={email}
          onChangeText={onChangeEmail}
          placeholder="email"
          keyboardType="email-address"
          //   onFocus={() => {
          //     Alert.alert("Please enter your email focussed");
          //   }}
          //   onBlur={() => {
          //     Alert.alert("Please enter your email blurred");
          //   }}
        />
        <TextInput
          style={styles.inputBox}
          value={password}
          onChangeText={onChangePassword}
          placeholder="password"
          keyboardType="default"
          secureTextEntry
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#0081c8',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 28,
    padding: 20,
    marginVertical: 8,
    color: '#0081c8',
    textAlign: 'center',
  },
  inputBox: {
    height: 50,
    marginHorizontal: 10,
    margin: 7,
    borderWidth: 0.3,
    padding: 10,
    fontSize: 20,
    borderRadius: 5,
    backgroundColor: 'white',
    borderColor: '#cbcbcb',
  },
});
