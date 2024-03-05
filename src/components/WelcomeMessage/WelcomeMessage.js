import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./WelcomeMessageStyles";
import { dataMessage } from "./dataMessage";
import checkmark from "../../img/titleAppScreenImage/Checkmark.png";

const WelcomeMessage = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={checkmark} />

      <View style={styles.textWrap}>
        <Text style={styles.welcomeMessage}>
          {dataMessage.WELCOME_MESSAGE}
          <Text style={styles.titleMessage}>{dataMessage.APP_TITLE}</Text>
        </Text>
        <Text style={styles.reminderMessage}>{dataMessage.REMINDER}</Text>
      </View>
    </View>
  );
};

export default WelcomeMessage;
