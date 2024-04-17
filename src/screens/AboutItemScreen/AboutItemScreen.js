import React, { useEffect, useState } from "react";
import { View, TextInput, Pressable, Keyboard, Alert } from "react-native";
import GradientContainer from "../../components/GradientContainer";
import styles from "./AboutItemScreenStyles";
import ActionButton from "../../components/ActionButton";
import HorisontaLine from "../../components/HorisontalLine";
import { THEME } from "../../theme";
import HeaderItem from "../../components/HeaderItem";
import BackButton from "../../components/BackButton";
import { useSelector, useDispatch } from "react-redux";
import { userToken } from "../../store/userSlice";
import { useIsFocused } from "@react-navigation/native";
import {
  deleteItem,
  toggleItemIsDone,
  changeItemDescription,
} from "../../../firebase";
import {
  removeItem,
  toggleLoader,
  toggleIsDone,
  changeItem,
} from "../../store/userSlice";

const AboutItemScreen = ({ navigation, route }) => {
  const { title, description, date, time, id, completed } = route.params;

  const focus = useIsFocused();

  useEffect(() => {
    if (!focus) navigation.goBack();
  }, [focus]);

  const dispatch = useDispatch();
  const [descriptionText, setDescriptionText] = useState(description);
  const userId = useSelector(userToken);

  const hideKeyboard = () => Keyboard.dismiss();

  const backNavigation = () => navigation.goBack();

  const setItemDone = async () => {
    dispatch(toggleLoader(true));

    const request = await toggleItemIsDone(userId, id, !completed);

    if (request.status === 200) {
      dispatch(toggleIsDone(id));
      navigation.goBack();
    } else {
      alert(request.errorMessade);
    }
    dispatch(toggleLoader(false));
  };
  const deleteUserItem = async () => {
    dispatch(toggleLoader(true));
    const request = await deleteItem(userId, id);
    if (request.status === 200) {
      dispatch(removeItem(id));
      navigation.goBack();
    } else {
      alert(request.errorMessade);
    }
    dispatch(toggleLoader(false));
  };

  const changeUserItem = async () => {
    dispatch(toggleLoader(true));
    const request = await changeItemDescription(userId, id, descriptionText);
    if (request.status === 200) {
      dispatch(changeItem({ id, descriptionText }));
      navigation.goBack();
    } else {
      alert(request.errorMessade);
    }
    dispatch(toggleLoader(false));
  };

  const disabledButton = () => {
    return description === descriptionText;
  };

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
            onPress={setItemDone}
          />
          <ActionButton
            title="Delete"
            iconName="trash"
            iconColor={THEME.DELETE_ITEM_BUTTON_COLOR}
            onPress={deleteUserItem}
          />
          <ActionButton
            title="Save"
            iconName="save"
            iconColor={THEME.WHITE_COLOR}
            onPress={changeUserItem}
            disabled={disabledButton()}
          />
        </View>
      </Pressable>
    </GradientContainer>
  );
};

export default AboutItemScreen;
