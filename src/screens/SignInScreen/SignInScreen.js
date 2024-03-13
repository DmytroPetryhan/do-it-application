import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Alert,
  Pressable,
  Keyboard,
  KeyboardAvoidingView,
  useWindowDimensions,
  Platform,
} from "react-native";
import WelcomeMessage from "../../components/WelcomeMessage";
import Input from "../../components/Input";
import NavigationButton from "../../components/NavigationButton";
import { THEME } from "../../theme";
import styles from "./SignInScreenStyles";
import Button from "../../components/Button/Button";
import GradientContainer from "../../components/GradientContainer";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import { dataMessage } from "../../data/dataMessageScreen";

const SignInScreen = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const hideKeyboard = () => Keyboard.dismiss();
  const { height } = useWindowDimensions();

  const navigateToSignUp = () => navigation.navigate("signUpScreen");

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
      <KeyboardAvoidingView
        keyboardVerticalOffset={height / 3}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <SafeAreaView style={styles.safeArea}>
          <Pressable style={styles.container} onPress={hideKeyboard}>
            <WelcomeMessage text={dataMessage.WELCOME_BACK_MESSAGE} />
            <View style={styles.inputContainer}>
              <Input
                value={email}
                title={"E - mail"}
                image={"mail"}
                keyboardType={"email-address"}
                onChangeText={setEmail}
              />

              <PasswordInput value={password} onChangeText={setPassword} />
            </View>
            <View style={styles.forgetPassworButton}>
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
            </View>
            <Button
              title={"sign in"}
              onPres={() => {
                setEmail("");
                setPassword("");
                console.log("M", email);
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
          </Pressable>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </GradientContainer>
  );
};

export default SignInScreen;
