import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Platform,
  Keyboard,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import WelcomeMessage from "../components/WelcomeMessage";
import Input from "../components/Input";
import NavigationButton from "../components/NavigationButton";
import Button from "../components/Button/Button";
import PasswordInput from "../components/PasswordInput/PasswordInput";
import { THEME } from "../theme";
import GradientContainer from "../components/GradientContainer";

const SignUpScreen = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const hideKeyboard = () => Keyboard.dismiss();

  const navigateToSignIn = () => {
    navigation.navigate("signInScreen");
  };
  return (
    <GradientContainer>
      <SafeAreaView style={styles.safeArea}>
        <Pressable style={styles.container}>
          <WelcomeMessage />
          <View style={styles.formContainer}>
            <Input
              title={"Name"}
              image={"person-sharp"}
              keyboardType={"default"}
              value={userName}
              onChangeText={setUserName}
            />

            <Input
              title={"E - mail"}
              image={"mail"}
              keyboardType={"email-address"}
              value={email}
              onChangeText={setEmail}
            />

            <PasswordInput value={password} onChangeText={setPassword} />

            <Button
              title={"sign up"}
              onPres={() => {
                setUserName("");
                setPassword("");
                setEmail("");
                console.log("N", userName);
                console.log("P", password);
                console.log("M", email);
              }}
            />
          </View>
          <View style={styles.signIn}>
            <Text style={styles.btnTitle}>Already have an account? </Text>
            <NavigationButton
              title={"sign in"}
              textColor={THEME.SIGN_UP_IN_COLOR}
              onPress={navigateToSignIn}
            />
          </View>
        </Pressable>
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
