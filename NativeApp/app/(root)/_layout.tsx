import React from "react";
import { View } from "react-native";
import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

/** Screen options here */
const screenOptions = {
  headerShown: false,
  tabBarHideOnKeyboard: true,
  tabBarStyle: {
    height: 65,
    paddingBottom: 10,
    borderColor: "white",
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  // tabBarShowLabel: false,
  tabBarActiveTintColor: "#FF9900",
  tabBarInactiveTintColor: "#088408",
};

const TabLayout = () => {
  return (
    <Tabs screenOptions={screenOptions}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={"#088408"}
            />
          ),
          tabBarItemStyle: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      />
      <Tabs.Screen
        name="About"
        options={{
          title: "About",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "grid" : "grid-outline"}
              color={"#088408"}
            />
          ),
          tabBarItemStyle: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      />
      <Tabs.Screen
        name="Contact"
        options={{
          title: "Contact",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={
                focused
                  ? "file-tray-stacked-sharp"
                  : "file-tray-stacked-outline"
              }
              color={"#088408"}
            />
          ),
          tabBarItemStyle: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              color={"#088408"}
            />
          ),
          tabBarItemStyle: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
