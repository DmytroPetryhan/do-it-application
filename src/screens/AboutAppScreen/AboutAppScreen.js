import React, { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./AboutAppScreenStyles";
import { useIsFocused } from "@react-navigation/native";

const AboutAppScreen = ({ navigation }) => {
  const focus = useIsFocused();

  useEffect(() => {
    if (!focus) navigation.goBack();
  }, [focus]);

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.text}>Name: do-it-app</Text>
        <Text style={styles.text}>Version: 1.0.0</Text>
      </View>
      <Text style={styles.text}>Technologies and libraries:</Text>
      <Text style={styles.text}>
        {"\u2022  "}
        Expo - for developing mobile applications on React Native.
      </Text>
      <Text style={styles.text}>
        {"\u2022  "}
        Redux Toolkit - for managing application state.
      </Text>

      <Text style={styles.text}>
        {"\u2022  "}
        React Navigation - for navigating between screens.
      </Text>
      <Text style={styles.text}>
        {"\u2022  "}
        AsyncStorage - for storing data on a mobile device.
      </Text>
      <Text style={styles.text}>
        {"\u2022  "}
        DateTimePicker - to pick a date and time.
      </Text>
      <Text style={styles.text}>
        {"\u2022  "}
        Axios - to make requests to the server lodash for working with data
        collections.
      </Text>
      <Text style={styles.text}>
        {"\u2022  "}
        react-native-paper - for creating UI components.
      </Text>
      <Text style={styles.text}>
        {"\u2022  "}
        react-native-vector-icons - for using icons.
      </Text>
      <Text style={styles.text}>
        {"\u2022  "}
        @gorhom/bottom-sheet - to use the bottom sheet.
      </Text>
      <Text style={styles.text}>
        {"\u2022  "}
        Firebase Console(https://console.firebase.google.com) - for remote data
        storage.
      </Text>
    </ScrollView>
  );
};

export default AboutAppScreen;
