import { StyleSheet } from "react-native";
import { THEME } from "../../theme";
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    width: "100%",
    backgroundColor: THEME.BUTTON_COLOR,
    borderRadius: 5,
  },
  titleButton: {
    fontSize: 18,
    color: THEME.WHITE_TEXT_COLOR,
    letterSpacing: 1,
    fontWeight: "600",
  },
});

export default styles;
