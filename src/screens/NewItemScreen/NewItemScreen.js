import React from "react";
import { View, KeyboardAvoidingView, Platform } from "react-native";
import styles from "./NewItemScreenStyles";
import { useIsFocused } from "@react-navigation/native";
import { THEME } from "../../theme";
import Input from "../../components/NewItemInput";
import Button from "../../components/NewItemButton";

const NewItemScreen = (props) => {
  const { closeModal } = props;
  const isFocused = useIsFocused();
  const closeBottomSheetModal = () => closeModal();

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
        multiline={false}
      />
      <Input
        multiline={true}
        maxLength={200}
        placeholder="Description"
        iconName="align-left"
        style={{ height: 200 }}
      />
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
