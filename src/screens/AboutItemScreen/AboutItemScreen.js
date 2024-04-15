import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Keyboard } from "react-native";
import GradientContainer from "../../components/GradientContainer";
import styles from "./AboutItemScreenStyles";
import ActionButton from "../../components/ActionButton";
import HorisontaLine from "../../components/HorisontalLine";
import { THEME } from "../../theme";
import HeaderItem from "../../components/HeaderItem/HeaderItem";

const AboutItemScreen = (item) => {
  const { title, description, date, time } = item;

  const [descriptionText, setDescriptionText] = useState(description);
  const hideKeyboard = () => Keyboard.dismiss();

  return (
    <GradientContainer>
      <Pressable style={styles.container} onPress={hideKeyboard}>
        <HeaderItem title={title} date={date} time={time} />
        <HorisontaLine style={styles.line} />
        <TextInput
          style={styles.textIn}
          value={descriptionText}
          multiline={true}
          onChangeText={setDescriptionText}
          maxLength={300}
        />

        <View style={styles.buttonWrap}>
          <ActionButton
            title="Done"
            iconName="check-circle"
            iconColor={THEME.ITEM_DONE_COLOR}
          />
          <ActionButton
            title="Delete"
            iconName="trash"
            iconColor={THEME.DELETE_ITEM_BUTTON_COLOR}
          />
          <ActionButton
            title="Save"
            iconName="save"
            iconColor={THEME.ITEM_DONE_COLOR}
          />
        </View>
      </Pressable>
    </GradientContainer>
  );
};

export default AboutItemScreen;
