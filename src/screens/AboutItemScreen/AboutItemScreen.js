import React, { useState } from "react";
import { View, TextInput, Pressable, Keyboard } from "react-native";
import GradientContainer from "../../components/GradientContainer";
import styles from "./AboutItemScreenStyles";
import ActionButton from "../../components/ActionButton";
import HorisontaLine from "../../components/HorisontalLine";
import { THEME } from "../../theme";
import HeaderItem from "../../components/HeaderItem";
import BackButton from "../../components/BackButton";

const AboutItemScreen = ({ navigation, route }) => {
  const { title, description, date, time } = route.params;
  const [descriptionText, setDescriptionText] = useState(description);

  const hideKeyboard = () => Keyboard.dismiss();

  const backNavigation = () => navigation.goBack();

  return (
    <GradientContainer style={styles.container}>
      <View style={styles.backButtonWrap}>
        <BackButton onPress={backNavigation} />
      </View>

      <Pressable style={styles.contentWrap} onPress={hideKeyboard}>
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
            iconColor={THEME.WHITE_COLOR}
          />
        </View>
      </Pressable>
    </GradientContainer>
  );
};

export default AboutItemScreen;
