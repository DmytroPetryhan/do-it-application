import { NavigationContainer } from "@react-navigation/native";
import PrimaryInformationStack from "./PrimaryInformationStack";

const RootNavigation = () => {
  return (
    <NavigationContainer theme={{ colors: "transparent" }}>
      <PrimaryInformationStack />
    </NavigationContainer>
  );
};
export default RootNavigation;
