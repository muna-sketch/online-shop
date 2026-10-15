import { StyleSheet, Platform, StatusBar, SafeAreaView } from "react-native";
import { Stack } from "expo-router";
// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
// import { useEffect } from "react";
// import "react-native-reanimated";

/** Prevent the splash screen from auto-hiding before asset loading is complete. */
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const [loaded] = useFonts({
  //   SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
  // });

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

  return (
    <SafeAreaView style={style.AndroidSafeArea}>
      <Stack>
        <Stack.Screen name="(root)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  AndroidSafeArea: {
    bottom: 0,
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});