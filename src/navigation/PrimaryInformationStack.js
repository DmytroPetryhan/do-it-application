import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TitleAppScreen from "../screens/TitleAppScreen/";
import OnboardingScreen from "../screens/OnboardingScreen";

const PrimaryInformationNavigation = createNativeStackNavigator();

const PrimaryInformationStack = () => {
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
    </PrimaryInformationNavigation.Navigator>
  );
};

export default PrimaryInformationStack;
