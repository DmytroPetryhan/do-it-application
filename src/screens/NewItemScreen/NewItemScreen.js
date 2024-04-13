import React, { useState } from "react";
import { View, KeyboardAvoidingView, Platform } from "react-native";
import styles from "./NewItemScreenStyles";
import { useIsFocused } from "@react-navigation/native";
import { THEME } from "../../theme";
import Input from "../../components/NewItemInput";
import Button from "../../components/NewItemButton";
import DateTimeSelectorButton from "../../components/DateTimeSelectorButton";
import DateTimeSelect from "../../components/DateTimeSelect";
import { addItem } from "../../store/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { addNewItem } from "../../../firebase";
import { userToken, toggleLoader } from "../../store/userSlice";

const NewItemScreen = (props) => {
  const { closeModal } = props;
  const dispatch = useDispatch();
  const userId = useSelector(userToken);

  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const isFocused = useIsFocused();
  const closeBottomSheetModal = () => closeModal();

  if (isFocused === false) closeBottomSheetModal();

  const showDataHandler = () => {
    setShowDate(!showDate);
    setShowTime(false);
  };

  const showTimeHandler = () => {
    setShowTime(!showTime);
    setShowDate(false);
  };

  const createNewItem = async () => {
    dispatch(toggleLoader(true));
    const item = {
      userId,
      title,
      description,
      date,
      time,
      completed: false,
    };
    const request = await addNewItem(item);
    if (request.status === 200) {
      dispatch(addItem({ ...item, id: request.itemId }));
    }
    closeBottomSheetModal();
    dispatch(toggleLoader(false));
  };

  const isDisabled = () => {
    if (title.trim() && description.trim() && date.trim() && time.trim()) {
      return false;
    } else {
      return true;
    }
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
          value={date}
          title="Date"
          iconName="calendar"
          onPress={showDataHandler}
        />
        <DateTimeSelectorButton
          value={time}
          title="Time"
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
          disabled={isDisabled()}
          onPress={createNewItem}
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
