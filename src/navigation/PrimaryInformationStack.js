import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TitleAppScreen from "../screens/TitleAppScreen/";
import OnboardingScreen from "../screens/OnboardingScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";

const PrimaryInformationStack = () => {
  const PrimaryInformationNavigation = createNativeStackNavigator();

  return (
    <PrimaryInformationNavigation.Navigator
      initialRouteName="titlScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <PrimaryInformationNavigation.Screen
        name="titleScreen"
        component={TitleAppScreen}
      />
      <PrimaryInformationNavigation.Screen
        name="onboardingScreen"
        component={OnboardingScreen}
      />
      <PrimaryInformationNavigation.Screen
        name="signInScreen"
        component={SignInScreen}
      />

      <PrimaryInformationNavigation.Screen
        name="signUpScreen"
        component={SignUpScreen}
      />
    </PrimaryInformationNavigation.Navigator>
  );
};

export default PrimaryInformationStack;
