import { View, Text, SafeAreaView, Keyboard, Pressable } from "react-native";
import React, { useState } from "react";
import WelcomeMessage from "../../components/WelcomeMessage";
import Input from "../../components/Input";
import NavigationButton from "../../components/NavigationButton";
import Button from "../../components/Button/Button";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import { THEME } from "../../theme";
import styles from "./SignUpScreenStyles";
import GradientContainer from "../../components/GradientContainer";
import { dataMessage } from "../../components/WelcomeMessage/dataMessage";

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
        <Pressable onPress={hideKeyboard} style={styles.container}>
          <WelcomeMessage text={dataMessage.WELCOME_MESSAGE} />
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

export default SignUpScreen;
