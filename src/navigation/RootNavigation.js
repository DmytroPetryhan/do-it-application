import { NavigationContainer } from "@react-navigation/native";
import MainGroupStack from "./MainGroupStack";
import Loader from "../components/Loader/Loader";
const RootNavigation = () => {
  return (
    <NavigationContainer theme={{ colors: { background: "transparent" } }}>
      <Loader />
      <MainGroupStack />
    </NavigationContainer>
  );
};
export default RootNavigation;
