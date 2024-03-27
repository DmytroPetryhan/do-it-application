import React from "react";
import GradientContainer from "../GradientContainer";
import { ActivityIndicator, View } from "react-native";
import { THEME } from "../../theme";
import { useSelector } from "react-redux";
import { loader } from "../../store/userSlice";
import styles from "./LoaderStyles";

const Loader = () => {
  const loadind = useSelector(loader);

  if (!loadind) return;

  return (
    <View style={styles.container}>
      <ActivityIndicator
        style={styles.indicator}
        size="large"
        color={THEME.LOADER}
      />
    </View>
  );
};

export default Loader;
