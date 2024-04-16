import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonTitle: {
    marginLeft: 15,
    fontSize: 20,
    fontFamily: "poppins-regular",
    color: THEME.WHITE_TEXT_COLOR,
    includeFontPadding: false,
  },
});

export default styles;
