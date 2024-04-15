import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    rowGap: 35,
    justifyContent: "center",
  },
  buttonWrap: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  textIn: {
    flex: 0.3,
    fontSize: 14,
    letterSpacing: 1,
    lineHeight: 20,
    fontFamily: "poppins-regular",
    color: THEME.WHITE_TEXT_COLOR,
  },
});

export default styles;
