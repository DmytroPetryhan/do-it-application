import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AboutAppScreen from "../screens/AboutAppScreen";
import { THEME } from "../theme";
const SettingsStackNavigation = createNativeStackNavigator();

const SettingsStack = () => {
  return (
    <SettingsStackNavigation.Navigator
      initialRouteName="settingsScreen"
      screenOptions={{
        headerTintColor: THEME.WHITE_TEXT_COLOR,
        headerTitleStyle: { fontFamily: "poppins-regular", fontSize: 22 },
        headerStyle: { backgroundColor: "transparent" },
      }}
    >
      <SettingsStackNavigation.Screen
        options={{
          headerTitle: "Settings",
        }}
        name="settingsScreen"
        component={SettingsScreen}
      />
      <SettingsStackNavigation.Screen
        options={{
          title: "Profile",
        }}
        name="profileScreen"
        component={ProfileScreen}
      />
      <SettingsStackNavigation.Screen
        options={{
          title: "About app",
        }}
        name="aboutApp"
        component={AboutAppScreen}
      />
    </SettingsStackNavigation.Navigator>
  );
};

export default SettingsStack;
