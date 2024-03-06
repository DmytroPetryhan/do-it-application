import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import WelcomeMessage from "../components/WelcomeMessage";
import Input from "../components/Input";
import NavigationButton from "../components/NavigationButton";
import { THEME } from "../theme";
import Button from "../components/Button/Button";

const SignInScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <WelcomeMessage />
        <View style={styles.inputContainer}>
          <Input
            title={"E - mail"}
            image={"mail"}
            keyboardType={"email-address"}
          />
          <Input
            title={"Password"}
            image={"lock-closed"}
            keyboardType={"default"}
          />
        </View>
        <NavigationButton
          style={{
            borderBottomWidth: 0.5,
            borderBottomColor: THEME.WHITE_COLOR,
            marginVertical: 30,
          }}
          title={"forget password?"}
          textColor={THEME.WHITE_TEXT_COLOR}
        />

        <Button title={"sign in"} />

        <View style={styles.signUp}>
          <Text style={styles.btnTitle}>Don’t have an account? </Text>
          <NavigationButton
            title={"sign up"}
            textColor={THEME.SIGN_UP_IN_COLOR}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    padding: 20,
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
