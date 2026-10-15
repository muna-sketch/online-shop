import ProductList from "@/components/ProductList";
import React from "react";
import {
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";

const { height } = Dimensions.get("window");

const Contact = () => {
  const dynamicFlex = height > 670 ? 1 : 1;

  return (
    <KeyboardAvoidingView style={[styles.container, { flex: dynamicFlex }]}>
      <ScrollView keyboardDismissMode="on-drag">
        <Text style={[styles.title]}>For you</Text>
        <ProductList />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#FEFEFA",
    backgroundColor: "#FEFFFC",
  },
  title: {
    fontSize: 20,
    padding: 10,
  },
});

export default Contact;
