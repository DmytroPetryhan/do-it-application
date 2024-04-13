import React from "react";
import { ActivityIndicator, View } from "react-native";
import { THEME } from "../../theme";
import { useSelector } from "react-redux";
import { loader } from "../../store/userSlice";
import styles from "./LoaderStyles";

const Loader = () => {
  const loading = useSelector(loader);
  if (!loading) return;

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
