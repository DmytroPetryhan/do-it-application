import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PrimaryInformationStack from "./PrimaryInformationStack";
import AuthUserStack from "./AuthUserStack";
import BottomTabsStack from "./BottomTabsStack";
import { useSelector } from "react-redux";
import { isOnboarded, userToken } from "../store/userSlice";

const MainGroup = createNativeStackNavigator();

const MainGroupStack = () => {
  const isOnboard = useSelector(isOnboarded);
  const token = useSelector(userToken);

  return (
    <MainGroup.Navigator screenOptions={{ headerShown: false }}>
      {isOnboard ? (
        token ? (
          <MainGroup.Screen
            name="BottomTabsStack"
            component={BottomTabsStack}
          />
        ) : (
          <MainGroup.Screen name="AuthUserStack" component={AuthUserStack} />
        )
      ) : (
        <MainGroup.Screen
          name="PrimaryInformationStack"
          component={PrimaryInformationStack}
        />
      )}
    </MainGroup.Navigator>
  );
};

export default MainGroupStack;
