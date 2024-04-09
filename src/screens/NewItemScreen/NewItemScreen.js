import React, { useState } from "react";
import {
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import styles from "./NewItemScreenStyles";
import { useIsFocused } from "@react-navigation/native";
import { THEME } from "../../theme";
import Input from "../../components/NewItemInput";
import Button from "../../components/NewItemButton";
import DateTimeSelectorButton from "../../components/DateTimeSelectorButton";
import DateTimePicker from "@react-native-community/datetimepicker";
import DateTimeSelect from "../../components/DateTimeSelect";

const NewItemScreen = (props) => {
  const { closeModal } = props;

  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("Date");
  const [time, setTime] = useState("Time");

  console.log("====================================");
  console.log("title ======= ", title);
  console.log("description ======= ", description);
  console.log("date ======= ", date);
  console.log("time ======= ", time);
  console.log("====================================");

  const isFocused = useIsFocused();
  const closeBottomSheetModal = () => closeModal();

  if (isFocused === false) closeBottomSheetModal();

  const showDataHandler = () => {
    setShowDate(!showDate);
    setShowTime(false);
  };

  const showTimeHandler = (currentMode) => {
    setShowTime(!showTime);
    setShowDate(false);
  };

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
        editable={showTime === false && showDate === false}
      />
      <Input
        multiline={true}
        placeholder="Description"
        iconName="align-left"
        maxLength={200}
        onChangeText={setDescription}
        style={{ height: 200 }}
        editable={showTime === false && showDate === false}
      />
      <View style={styles.buttonDateWrap}>
        <DateTimeSelectorButton
          title={date}
          iconName="calendar"
          onPress={showDataHandler}
        />
        <DateTimeSelectorButton
          title={time}
          iconName="clock-o"
          onPress={showTimeHandler}
        />
      </View>
      <View style={styles.buttonWrap}>
        <Button title="cancel" onPress={closeBottomSheetModal} />
        <Button
          title="create"
          style={{ backgroundColor: THEME.NEW_ITEM_BUTTON_COLOR }}
          textStyle={{ color: THEME.WHITE_TEXT_COLOR }}
        />
      </View>

      {showDate && (
        <DateTimeSelect
          mode="date"
          cancelHandler={showDataHandler}
          handlerDateTimeChange={setDate}
        />
      )}
      {showTime && (
        <DateTimeSelect
          mode="time"
          cancelHandler={showTimeHandler}
          handlerDateTimeChange={setTime}
        />
      )}
    </KeyboardAvoidingView>
  );
};

export default NewItemScreen;
