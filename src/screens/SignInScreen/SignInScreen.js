import React from "react";
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
import { THEME } from "../../theme";
import { signInUser } from "../../../firebase";
import { useDispatch } from "react-redux";
import { addUser, toggleLoader } from "../../store/userSlice";
import WelcomeMessage from "../../components/WelcomeMessage";
import Input from "../../components/Input";
import NavigationButton from "../../components/NavigationButton";
import styles from "./SignInScreenStyles";
import Button from "../../components/Button/Button";
import GradientContainer from "../../components/GradientContainer";
import { useForm } from "react-hook-form";
import { findPassword } from "../../../firebase";
import { emailRules } from "../../data/regularExpressions";
import { passwordRules } from "../../data/regularExpressions";

const SignInScreen = ({ navigation }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userEmail: "",
      userPassword: "",
    },
  });

  const dispatch = useDispatch();
  const hideKeyboard = () => Keyboard.dismiss();
  const { height } = useWindowDimensions();

  const navigateHandler = (route) => () => navigation.navigate(route);

  const submitForm = async ({ userEmail, userPassword }) => {
    dispatch(toggleLoader(true));
    const findUser = {
      userEmail,
      userPassword,
    };

    try {
      const request = await signInUser(findUser);
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

  const remindPassword = () => {
    Alert.prompt("Forget password ?", "Please enter your email !!!", [
      {
        text: "Cancel",
        style: "destructive",
      },
      {
        text: "OK",
        onPress: async (txt) => {
          if (txt.trim().length) {
            const request = await findPassword(txt);
            alert(request);
          } else {
            alert(`Invalid email...`);
          }
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
                name="userEmail"
                placeholder="E - mail"
                image="mail"
                keyboardType="email-address"
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
            </View>
            <View style={styles.forgetPassworButton}>
              <NavigationButton
                style={styles.navigationButton}
                title={"forgot password?"}
                textColor={THEME.WHITE_TEXT_COLOR}
                onPress={remindPassword}
              />
            </View>
            <Button
              title={"sign in"}
              onPres={handleSubmit(submitForm)}
              disabled={Object.keys(errors).length}
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
