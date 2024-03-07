import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Platform,
  Alert,
} from "react-native";
import WelcomeMessage from "../components/WelcomeMessage";
import Input from "../components/Input";
import NavigationButton from "../components/NavigationButton";
import { THEME } from "../theme";
import Button from "../components/Button/Button";
import GradientContainer from "../components/GradientContainer";
import PasswordInput from "../components/PasswordInput/PasswordInput";

const SignInScreen = ({ navigation }) => {
  const [password, setPassword] = useState("123");

  console.log("========================================");

  const navigateToSignUp = () => {
    navigation.navigate("signUpScreen");
  };
  const remindPassword = () => {
    Alert.alert("Forget password ?", "Please enter a new password !!!", [
      {
        text: "Cancel",
        style: "destructive",
      },
      {
        text: "OK",
        onPress: () => {
          alert(`Your password ...`);
        },
      },
    ]);
  };
  return (
    <GradientContainer>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <WelcomeMessage />
          <View style={styles.inputContainer}>
            <Input
              title={"E - mail"}
              image={"mail"}
              keyboardType={"email-address"}
              // onChangeText={setEmail}
            />
            <PasswordInput value={password} onChangeText={setPassword} />
          </View>
          <NavigationButton
            style={{
              borderBottomWidth: 0.5,
              borderBottomColor: THEME.WHITE_COLOR,
              marginVertical: 30,
            }}
            title={"forget password?"}
            textColor={THEME.WHITE_TEXT_COLOR}
            onPress={remindPassword}
          />

          <Button
            title={"sign in"}
            onPres={() => {
              //console.log("M", mail);
              console.log("P", password);
            }}
          />

          <View style={styles.signUp}>
            <Text style={styles.btnTitle}>Don’t have an account? </Text>
            <NavigationButton
              title={"sign up"}
              textColor={THEME.SIGN_UP_IN_COLOR}
              onPress={navigateToSignUp}
            />
          </View>
        </View>
      </SafeAreaView>
    </GradientContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    padding: 20,
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  signUp: {
    width: "100%",
    paddingVertical: 20,
    justifyContent: "center",
    flexDirection: "row",
  },
  btnTitle: {
    fontFamily: "poppins-regular",
    color: THEME.WHITE_TEXT_COLOR,
    letterSpacing: 1.5,
  },
  inputContainer: {
    marginTop: 40,
    height: 150,
    justifyContent: "space-between",
  },
});

export default SignInScreen;
