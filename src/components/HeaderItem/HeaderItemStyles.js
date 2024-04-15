import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

const styles = StyleSheet.create({
  container: {},
  dateWrap: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    opacity: 0.7,
  },
  title: {
    fontSize: 22,
    letterSpacing: 1.5,
    fontFamily: "poppins-bold",
    color: THEME.WHITE_TEXT_COLOR,
  },
  date: {
    marginTop: 5,
    fontSize: 14,
    letterSpacing: 1,
    fontFamily: "poppins-regular",
    color: THEME.WHITE_TEXT_COLOR,
    lineHeight: 16,
  },
});

export default styles;
