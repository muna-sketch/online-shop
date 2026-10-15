import { Redirect } from "expo-router";
import React from "react";

const RootPage = () => {
  const isSignedIn = true;

  if (isSignedIn) {
    return <Redirect href="./(root)" />;
  }
  //   return <Redirect href="./(auth)/onboarding" />;
};

export default RootPage;