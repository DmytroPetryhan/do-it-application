import { NavigationContainer } from "@react-navigation/native";
import MainGroupStack from "./MainGroupStack";

const RootNavigation = () => {
  return (
    <NavigationContainer theme={{ colors: { background: "transparent" } }}>
      <MainGroupStack />
    </NavigationContainer>
  );
};
export default RootNavigation;
