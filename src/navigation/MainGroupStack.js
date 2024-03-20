import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PrimaryInformationStack from "./PrimaryInformationStack";
import BottomTabsStack from "./BottomTabsStack";

const MainGroup = createNativeStackNavigator();

const isOnboard = false;
const initialScreen = isOnboard ? "BottomTabsStack" : "PrimaryInformationStack";

const MainGroupStack = () => {
  return (
    <MainGroup.Navigator
      initialRouteName={initialScreen}
      screenOptions={{ headerShown: false }}
    >
      <MainGroup.Screen
        name="PrimaryInformationStack"
        component={PrimaryInformationStack}
      />
      <MainGroup.Screen name="BottomTabsStack" component={BottomTabsStack} />
    </MainGroup.Navigator>
  );
};

export default MainGroupStack;
