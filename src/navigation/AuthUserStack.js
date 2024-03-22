import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";

const AuthUserNaviation = createNativeStackNavigator();

const AuthUserStack = () => {
  return (
    <AuthUserNaviation.Navigator
      initialRouteName="signInScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthUserNaviation.Screen name="signInScreen" component={SignInScreen} />
      <AuthUserNaviation.Screen name="signUpScreen" component={SignUpScreen} />
    </AuthUserNaviation.Navigator>
  );
};
export default AuthUserStack;
