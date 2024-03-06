import { StyleSheet, View, Text } from "react-native";
import React from "react";
import WelcomeMessage from "../components/WelcomeMessage";
import Input from "../components/Input";
import NavigationButton from "../components/NavigationButton";
import Button from "../components/Button/Button";
import { THEME } from "../theme";

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <WelcomeMessage />
      <View style={styles.formContainer}>
        <Input
          title={"Full Name"}
          image={"person-sharp"}
          keyboardType={"default"}
        />

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

        <Button title={"sign up"} />
      </View>
      <View style={styles.signIn}>
        <Text style={styles.btnTitle}>Already have an account? </Text>
        <NavigationButton
          title={"sign in"}
          textColor={THEME.SIGN_UP_IN_COLOR}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    padding: 20,
  },
  signIn: {
    width: "100%",
    paddingVertical: 20,
    justifyContent: "center",
    flexDirection: "row",
  },
  btnTitle: {
    letterSpacing: 1.5,
    fontFamily: "poppins-regular",
    color: THEME.WHITE_TEXT_COLOR,
  },
  formContainer: {
    width: "100%",
    marginTop: 40,
    rowGap: 40,
  },
});

export default SignUpScreen;
