import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
// Import local components here
import LittleLemonHeader from "@/components/Header";
import LittleLemonFooter from "@/components/Footer";
import LemonHeader from "@/components/LemonHeader";
import WelcomeScreen from "@/components/Welcome";
import WelcomeScroll from "@/components/WelcomeScroll";
import MenuItems from "@/components/MenuItems";
import MenuItems2 from "@/components/Flatlist";

export default function Index() {
  return (
    <>
      <View style={styles.header}>
        {/* <Text>Edit app/index.tsx to edit this screen.</Text> */}
        {/* <LemonHeader /> */}
        {/* <MenuItems /> */}
        {/* <WelcomeScreen /> */}
        {/* <WelcomeScroll /> */}
        <LittleLemonHeader />
        <MenuItems2 />
      </View>
      <View style={styles.footer}>
        {/* <LittleLemonFooter /> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#333333",
    // justifyContent: "center",
    // alignItems: "center",
  },
  footer: {
    backgroundColor: "#333333",
  },
});
