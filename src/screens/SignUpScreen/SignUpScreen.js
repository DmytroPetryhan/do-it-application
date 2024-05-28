import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { dataMessage } from "../../data/dataMessageScreen";
import { THEME } from "../../theme";
import { signUpUser } from "../../../firebase";
import { useDispatch } from "react-redux";
import { addUser, toggleLoader } from "../../store/userSlice";
import WelcomeMessage from "../../components/WelcomeMessage";
import Input from "../../components/Input";
import NavigationButton from "../../components/NavigationButton";
import Button from "../../components/Button/Button";
import styles from "./SignUpScreenStyles";
import GradientContainer from "../../components/GradientContainer";
import { useForm } from "react-hook-form";
import {
  emailRules,
  nameRules,
  passwordRules,
} from "../../data/regularExpressions";

const SignUpScreen = ({ navigation }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: "",
      userEmail: "",
      userPassword: "",
    },
  });

  const dispatch = useDispatch();

  const hideKeyboard = () => Keyboard.dismiss();
  const { height } = useWindowDimensions();

  const navigateToSignIn = (route) => () => navigation.navigate(route);

  const submitForm = async ({ userName, userEmail, userPassword }) => {
    dispatch(toggleLoader(true));
    const newUser = {
      userName,
      userEmail,
      userPassword,
    };
    try {
      const request = await signUpUser(newUser);
      if (request.status === 200) {
        dispatch(addUser({ id: request.userId }));
      } else {
        alert(request.errorMessade);
      }
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(toggleLoader(false));
    }
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
                name="userName"
                placeholder={"Name"}
                image={"person-sharp"}
                keyboardType={"default"}
                control={control}
                rules={nameRules}
              />

              <Input
                name="userEmail"
                placeholder={"E - mail"}
                image={"mail"}
                keyboardType={"email-address"}
                control={control}
                rules={emailRules}
              />

              <Input
                name="userPassword"
                placeholder="Password"
                image="lock-closed"
                keyboardType="default"
                control={control}
                secureTextEntry
                rules={passwordRules}
              />

              <Button
                disabled={Object.keys(errors).length}
                title={"sign up"}
                onPres={handleSubmit(submitForm)}
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
