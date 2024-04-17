import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import styles from "../ProfileScreen/ProfileScreenStyles";
import { useSelector, useDispatch } from "react-redux";
import { profile, userToken, loader, cleareStore } from "../../store/userSlice";
import { useIsFocused } from "@react-navigation/native";
import { deleteUser } from "../../../firebase";

const ProfileScreen = ({ navigation }) => {
  const { userEmail, userName, userPassword } = useSelector(profile);
  const userId = useSelector(userToken);
  const dispatch = useDispatch();
  const focus = useIsFocused();

  useEffect(() => {
    if (!focus) navigation.goBack();
  }, [focus]);

  const deleteHandler = () => async () => {
    dispatch(toggleLoader(true));
    const request = await deleteUser(userId);
    if (request.status === 200) {
      dispatch(cleareStore());
    } else {
      alert(request.errorMessade);
      dispatch(toggleLoader(false));
    }
  };

  const deleteProfile = () => {
    Alert.alert(
      "Deleting a profile",
      "Do you really want to delete the profile?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: deleteHandler(),
        },
      ]
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={styles.text}>name:</Text>
        <Text style={styles.userInfo}>{userName}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.text}>email:</Text>
        <Text style={styles.userInfo}>{userEmail}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.text}>password:</Text>
        <Text style={styles.userInfo}>{userPassword}</Text>
      </View>
      <View style={styles.buttonWrap}>
        <TouchableOpacity style={styles.buttonStyle} onPress={deleteProfile}>
          <Text style={styles.buttonTitle}>Delete profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
