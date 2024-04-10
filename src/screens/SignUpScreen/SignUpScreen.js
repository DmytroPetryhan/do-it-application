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
import React, { useEffect, useState } from "react";
import { dataMessage } from "../../data/dataMessageScreen";
import { useValidName } from "./useValidName";
import { useValidEmail } from "./useValidEmail";
import { useValidPassword } from "./useValidPassword";
import { THEME } from "../../theme";
import { signUpUser } from "../../../firebase";
import { useDispatch } from "react-redux";
import { addUser, toggleLoader } from "../../store/userSlice";
import WelcomeMessage from "../../components/WelcomeMessage";
import Input from "../../components/Input";
import NavigationButton from "../../components/NavigationButton";
import Button from "../../components/Button/Button";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import styles from "./SignUpScreenStyles";
import GradientContainer from "../../components/GradientContainer";
import useSigUpScreenLogic from "./hooks/index";

const SignUpScreen = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [errors, setErrors] = useState({});
  //const {} = useSigUpScreenLogic();

  const [disableButton, setDisableButton] = useState(true);
  const dispatch = useDispatch();

  const hideKeyboard = () => Keyboard.dismiss();
  const { height } = useWindowDimensions();

  const navigateToSignIn = (route) => () => navigation.navigate(route);

  useEffect(() => {
    const isValid = validationForm();
    isValid ? setDisableButton(true) : setDisableButton(false);
  }, [userName, userPassword, userEmail]);

  const validationForm = () => {
    let errors = {};
    if (!useValidName(userName.trim())) errors.userName = "Incorrect user name";
    if (!useValidEmail(userEmail.trim())) errors.userEmail = "Incorrect E-mail";
    if (!useValidPassword(userPassword.trim()))
      errors.userPassword = "Incorrect password";
    setErrors(errors);
    return Object.keys(errors).length !== 0;
  };

  const submitForm = async () => {
    dispatch(toggleLoader(true));
    const newUser = {
      userName,
      userEmail,
      userPassword,
      items: [
        {
          title: "1 Do It",
          id: 0,
          completed: false,
          description:
            "0 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas maecenas. ",
        },
        {
          title: "2 Do It",
          id: 1,
          completed: false,
          description:
            "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas maecenas. ",
        },
        {
          title: "3 Do It",
          id: 2,
          completed: true,
          description:
            "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas maecenas. ",
        },
        {
          title: "4 Do It",
          id: 3,
          completed: false,
          description:
            "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas maecenas. ",
        },
        {
          title: "5 Do It",
          id: 4,
          completed: false,
          description:
            "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas maecenas. ",
        },
        {
          title: "6 Do It",
          id: 5,
          completed: true,
          description:
            "5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas maecenas. ",
        },
        {
          title: "7 Do It",
          id: 6,
          completed: false,
          description:
            "5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas maecenas. ",
        },
        {
          title: "8 Do It",
          id: 7,
          completed: true,
          description:
            "5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas maecenas. ",
        },
        {
          title: "9 Do It",
          id: 8,
          completed: false,
          description:
            "5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas maecenas. ",
        },
        {
          title: "10 Do It",
          id: 9,
          completed: true,
          description:
            "5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas maecenas. ",
        },
        {
          title: "11 Do It",
          id: 10,
          completed: false,
          description:
            "5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas maecenas. ",
        },
        {
          title: "12 Do It",
          id: 11,
          completed: true,
          description:
            "5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas maecenas. ",
        },
        {
          title: "13 Do It",
          id: 12,
          completed: true,
          description:
            "5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas maecenas. ",
        },
      ],
    };
    const request = await signUpUser(newUser);
    if (request.status === 200) {
      dispatch(addUser({ ...newUser, id: request.userId }));
    } else {
      alert(request.errorMessade);
    }
    dispatch(toggleLoader(false));
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
