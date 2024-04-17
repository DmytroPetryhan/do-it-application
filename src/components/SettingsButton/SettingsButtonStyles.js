import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  iconText: {
    flexDirection: "row",
  },
  text: {
    color: THEME.WHITE_TEXT_COLOR,
    fontSize: 18,
    fontFamily: "poppins-regular",
    letterSpacing: 1,
    marginLeft: 10,
  },
});

export default styles;
