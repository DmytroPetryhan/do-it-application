import { StyleSheet, Dimensions } from "react-native";
import { THEME } from "../../theme";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: THEME.SEARCH_INPUT_BACKGROUNDCOLOR,
  },
  input: {
    width: width - 100,
    color: THEME.WHITE_COLOR,
    opacity: 0.5,
    fontSize: 18,
    letterSpacing: 1,
    includeFontPadding: false,
  },
  icon: {
    opacity: 0.5,
  },
});

export default styles;
