import { StyleSheet, Dimensions } from "react-native";
import { THEME } from "../../theme";
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    width: width - 200,
    height: 45,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: THEME.SEARCH_INPUT_BACKGROUNDCOLOR,
  },
  input: {
    color: THEME.WHITE_COLOR,
    opacity: 0.6,
    fontSize: 12,
    fontFamily: "poppins-regular",
    includeFontPadding: false,
  },
  icon: {
    opacity: 0.6,
  },
});

export default styles;
