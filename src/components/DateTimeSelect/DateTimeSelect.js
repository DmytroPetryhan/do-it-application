import React, { useState } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import styles from "./DataTimeSelectStyles";
import DateTimePicker from "@react-native-community/datetimepicker";

const DateTimeSelect = (props) => {
  const { mode, cancelHandler, handlerDateTimeChange } = props;

  const offset = new Date().getTimezoneOffset() * 60 * 1000;
  const currentTime = new Date().getTime() - offset;
  const curentDate = new Date(currentTime);

  const minimumDate = mode === "date" ? curentDate : new Date(1589216000000);

  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    if (Platform.OS === "android") handlerPicker();
  };

  const handlerPicker = () => {
    const d = date.toDateString().slice(4, 15);
    const t = `${date.getHours().toLocaleString()}:${date.getMinutes()}`;

    const selectedDate = mode === "date" ? d : t;
    handlerDateTimeChange(selectedDate);
    cancelHandler();
  };
  return (
    <View style={styles.container}>
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        minimumDate={minimumDate}
        maximumDate={new Date(2089216000000)}
        mode={mode}
        is24Hour={true}
        onChange={onChange}
        display="spinner"
      />
      {Platform.OS === "ios" && (
        <View style={styles.buttonWrap}>
          <TouchableOpacity style={styles.button} onPress={cancelHandler}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handlerPicker}>
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default DateTimeSelect;
