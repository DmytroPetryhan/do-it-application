import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomePageScreen from "../screens/HomePageScreen";
import TaskPageScreen from "../screens/TasksPageScreen";
import GradientContainer from "../components/GradientContainer";
import SettingsScreen from "../screens/SettingsScreen";
import { Platform } from "react-native";
import { THEME } from "../theme";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";

const BottomNavigator =
  Platform.OS === "ios"
    ? createBottomTabNavigator()
    : createMaterialBottomTabNavigator();

const getNavigationOptions = () => {
  const theme = useTheme();
  theme.colors.secondaryContainer = "transparent";

  if (Platform.OS === "android") {
    return {
      headerShown: false,
      shifting: true,
      activeColor: THEME.BOTTOM_NAVIGATION_ACTIVE_COLOR,
      inactiveColor: THEME.BOTTOM_NAVIGATION_INACTIVE_COLOR,
      barStyle: {
        backgroundColor: "transparent",
      },
    };
  } else {
    return {
      screenOptions: {
        headerShown: false,
        tabBarActiveTintColor: THEME.BOTTOM_NAVIGATION_ACTIVE_COLOR,
        tabBarInactiveTintColor: THEME.BOTTOM_NAVIGATION_INACTIVE_COLOR,
        tabBarStyle: { backgroundColor: "transparent", borderTopWidth: 0 },
      },
    };
  }
};

function BottomTabsStack() {
  return (
    <GradientContainer>
      <BottomNavigator.Navigator
        style={{ marginBottom: 0 }}
        {...getNavigationOptions()}
        initialRouteName="Home"
      >
        <BottomNavigator.Screen
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={24} color={color} />
            ),
          }}
          name="homeScreen"
          component={HomePageScreen}
        />

        <BottomNavigator.Screen
          options={{
            title: "Tasks",
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="tasks" size={24} color={color} />
            ),
          }}
          name="taskScreen"
          component={TaskPageScreen}
        />
        <BottomNavigator.Screen
          options={{
            headerTintColor: THEME.WHITE_TEXT_COLOR,
            headerTitle: "Settings",
            title: "Settings",
            headerShown: true,
            headerTitleStyle: { fontSize: 25, fontFamily: "poppins-regular" },
            tabBarIcon: ({ color }) => (
              <Ionicons name="settings-sharp" size={24} color={color} />
            ),
          }}
          name="settingsScreen"
          component={SettingsScreen}
        />
      </BottomNavigator.Navigator>
    </GradientContainer>
  );
}

export default BottomTabsStack;
