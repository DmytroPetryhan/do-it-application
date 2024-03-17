import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { dataMessage } from "../../data/dataMessageScreen";
import { useValidName } from "./useValidName";
import { useValidEmail } from "./useValidEmail";
import { useValidPassword } from "./useValidPassword";
import { THEME } from "../../theme";
import WelcomeMessage from "../../components/WelcomeMessage";
import Input from "../../components/Input";
import NavigationButton from "../../components/NavigationButton";
import Button from "../../components/Button/Button";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import styles from "./SignUpScreenStyles";
import GradientContainer from "../../components/GradientContainer";

const SignUpScreen = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [disableButton, setDisableButton] = useState(true);

  const hideKeyboard = () => Keyboard.dismiss();
  const { height } = useWindowDimensions();

  const navigateToSignIn = (route) => () => navigation.navigate(route);

  useEffect(() => {
    const isValid = validationForm();
    if (!isValid) setDisableButton(false);
  }, [userName, userPassword, userEmail]);

  const validationForm = () => {
    let errors = {};
    if (!useValidName(userName)) errors.userName = "Incorrect user name";
    if (!useValidEmail(userEmail)) errors.userEmail = "Incorrect E-mail";
    if (!useValidPassword(userPassword))
      errors.userPassword = "Incorrect password";

    setErrors(errors);

    return Object.keys(errors).length !== 0;
  };

  const submitForm = () => {
    const newUser = {
      userName,
      userEmail,
      userPassword,
      items: {},
    };
  };
  return (
    <GradientContainer>
      <KeyboardAvoidingView
        keyboardVerticalOffset={height / 3}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <SafeAreaView style={styles.safeArea}>
          <Pressable onPress={hideKeyboard} style={styles.container}>
            <WelcomeMessage text={dataMessage.WELCOME_MESSAGE} />
            <View style={styles.formContainer}>
              <Input
                title={"Name"}
                image={"person-sharp"}
                errorMessage={errors.userName}
                keyboardType={"default"}
                value={userName}
                onChangeText={setUserName}
              />

              <Input
                title={"E - mail"}
                image={"mail"}
                errorMessage={errors.userEmail}
                keyboardType={"email-address"}
                value={userEmail}
                onChangeText={setUserEmail}
              />

              <PasswordInput
                value={userPassword}
                errorMessage={errors.userPassword}
                onChangeText={setUserPassword}
              />

              <Button
                disabled={disableButton}
                title={"sign up"}
                onPres={submitForm}
              />
            </View>

            <View style={styles.signIn}>
              <Text style={styles.btnTitle}>Already have an account? </Text>
              <NavigationButton
                title={"sign in"}
                textColor={THEME.SIGN_UP_IN_COLOR}
                onPress={navigateToSignIn("signInScreen")}
              />
            </View>
          </Pressable>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </GradientContainer>
  );
};

export default SignUpScreen;
