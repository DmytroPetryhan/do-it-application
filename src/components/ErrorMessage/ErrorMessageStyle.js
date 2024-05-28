import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 40,
    marginTop: 5,
  },
  textStyle: {
    fontSize: 12,
    fontFamily: "poppins-regular",
    color: THEME.WARNING_RED_COLOR,
  },
});

export default styles;
