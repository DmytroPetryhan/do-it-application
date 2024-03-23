import React, { useState, useEffect } from "react";
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
import { dataMessage } from "../../data/dataMessageScreen";
import { useValidEmail } from "../SignUpScreen/useValidEmail";
import { useValidPassword } from "../SignUpScreen/useValidPassword";
import { THEME } from "../../theme";
import { signInUser } from "../../../firebase";
import { CommonActions } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addUser, toggleLoader } from "../../store/userSlice";
import WelcomeMessage from "../../components/WelcomeMessage";
import Input from "../../components/Input";
import NavigationButton from "../../components/NavigationButton";
import styles from "./SignInScreenStyles";
import Button from "../../components/Button/Button";
import GradientContainer from "../../components/GradientContainer";
import PasswordInput from "../../components/PasswordInput/PasswordInput";

const SignInScreen = ({ navigation }) => {
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [disableButton, setDisableButton] = useState(true);
  const dispatch = useDispatch();

  const hideKeyboard = () => Keyboard.dismiss();
  const { height } = useWindowDimensions();

  const navigateHandler = (route) => () => navigation.navigate(route);

  useEffect(() => {
    const isValid = validationForm();
    isValid ? setDisableButton(true) : setDisableButton(false);
  }, [userPassword, userEmail]);

  const validationForm = () => {
    let errors = {};
    if (!useValidEmail(userEmail)) errors.userEmail = "Incorret E-mail";
    if (!useValidPassword(userPassword))
      errors.userPassword = "Incorrect password";
    setErrors(errors);

    return Object.keys(errors).length !== 0;
  };

  const submitForm = async () => {
    dispatch(toggleLoader(true));
    const findUser = {
      userEmail,
      userPassword,
    };
    const request = await signInUser(findUser);
    if (request.status === 200) {
      dispatch(addUser(request.newUser));
    } else {
      alert(request.errorMessade);
    }
    dispatch(toggleLoader(false));
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
                value={userEmail}
                title={"E - mail"}
                image={"mail"}
                errorMessage={errors.userEmail}
                keyboardType={"email-address"}
                onChangeText={setUserEmail}
              />

              <PasswordInput
                value={userPassword}
                errorMessage={errors.userPassword}
                onChangeText={setUserPassword}
              />
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
              onPres={submitForm}
              disabled={disableButton}
            />

            <View style={styles.signUp}>
              <Text style={styles.btnTitle}>Don’t have an account? </Text>
              <NavigationButton
                title={"sign up"}
                textColor={THEME.SIGN_UP_IN_COLOR}
                onPress={navigateHandler("signUpScreen")}
              />
            </View>
          </Pressable>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </GradientContainer>
  );
};

export default SignInScreen;
