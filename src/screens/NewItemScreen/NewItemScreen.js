import React, { useState } from "react";
import { View, KeyboardAvoidingView, Platform } from "react-native";
import styles from "./NewItemScreenStyles";
import { useIsFocused } from "@react-navigation/native";
import { THEME } from "../../theme";
import Input from "../../components/NewItemInput";
import Button from "../../components/NewItemButton";
import DateTimeSelectorButton from "../../components/DateTimeSelectorButton";

const NewItemScreen = (props) => {
  const { closeModal } = props;
  const [visiableCalendar, setVisiableCalendar] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("Date");
  const [time, setTime] = useState("Time");
  const isFocused = useIsFocused();
  const closeBottomSheetModal = () => closeModal();

  const toggleCalendarPicker = (toggle) => () => setVisiableCalendar(toggle);

  if (isFocused === false) closeBottomSheetModal();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Input
        placeholder="task"
        iconName="check-square"
        maxLength={30}
        onChangeText={setTitle}
        multiline={false}
      />
      <Input
        multiline={true}
        placeholder="Description"
        iconName="align-left"
        maxLength={200}
        onChangeText={setDescription}
        style={{ height: 200 }}
      />
      <View style={styles.buttonDateWrap}>
        <DateTimeSelectorButton
          title={date}
          iconName="calendar"
          onPress={toggleCalendarPicker(true)}
        />
        <DateTimeSelectorButton title={time} iconName="clock-o" />
      </View>
      <View style={styles.buttonWrap}>
        <Button title="cancel" onPress={closeBottomSheetModal} />
        <Button
          title="create"
          style={{ backgroundColor: THEME.NEW_ITEM_BUTTON_COLOR }}
          textStyle={{ color: THEME.WHITE_TEXT_COLOR }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default NewItemScreen;
