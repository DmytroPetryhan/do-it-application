import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePageScreen from "../screens/HomePageScreen";
import AboutItemScreen from "../screens/AboutItemScreen";
import { THEME } from "../theme";

const HomeStackNavigation = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <HomeStackNavigation.Navigator initialRouteName="homeScreen">
      <HomeStackNavigation.Screen
        options={{
          title: "Home",
          headerShown: false,
        }}
        name="homeScreen"
        component={HomePageScreen}
      />

      <HomeStackNavigation.Screen
        name="itemDetail"
        component={AboutItemScreen}
        options={{
          headerShown: false,
        }}
      />
    </HomeStackNavigation.Navigator>
  );
};
export default HomeStack;
