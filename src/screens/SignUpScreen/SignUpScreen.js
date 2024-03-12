import { View, Text, SafeAreaView, Keyboard, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import WelcomeMessage from "../../components/WelcomeMessage";
import Input from "../../components/Input";
import NavigationButton from "../../components/NavigationButton";
import Button from "../../components/Button/Button";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import { THEME } from "../../theme";
import styles from "./SignUpScreenStyles";
import GradientContainer from "../../components/GradientContainer";
import { dataMessage } from "../../components/WelcomeMessage/dataMessage";
import { useValidName } from "./useValidName";
import { useValidEmail } from "./useValidEmail";
import { useValidPassword } from "./useValidPassword";

const SignUpScreen = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [disableButton, setDisableButton] = useState(true);

  const hideKeyboard = () => Keyboard.dismiss();

  const navigateToSignIn = () => {
    navigation.navigate("signInScreen");
  };
  useEffect(() => {
    setDisableButton(validationForm());
  }, [userName, userPassword, userEmail]);

  const validationForm = () => {
    let errors = {};
    if (!useValidName(userName)) errors.userName = "Incorrect user name";
    if (!useValidEmail(userEmail)) errors.userEmail = "Incorrect user E-mail";
    if (!useValidPassword(userPassword))
      errors.userPassword = "Incorrect password";
    setErrors(errors);

    return Object.keys(errors).length !== 0;
  };

  const submitForm = () => {
    setUserName("");
    setUserPassword("");
    setUserEmail("");
    console.log("Name", userName);
    console.log("Password", userPassword);
    console.log("Email", userEmail);
  };

  return (
    <GradientContainer>
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
              onPress={navigateToSignIn}
            />
          </View>
        </Pressable>
      </SafeAreaView>
    </GradientContainer>
  );
};

export default SignUpScreen;
