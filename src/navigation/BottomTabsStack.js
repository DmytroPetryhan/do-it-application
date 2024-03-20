import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePageScreen from "../screens/HomePageScreen";
const BottomTabs = createBottomTabNavigator();

function BottomTabsStack() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomTabs.Screen name="homeScreen" component={HomePageScreen} />
    </BottomTabs.Navigator>
  );
}

export default BottomTabsStack;
