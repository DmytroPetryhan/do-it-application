import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  backButtonWrap: {
    flex: 0.2,
    justifyContent: "center",
  },

  contentWrap: {
    flex: 0.8,
    marginTop: 35,
    rowGap: 35,
  },
  textIn: {
    flex: 0.6,
    fontSize: 16,
    letterSpacing: 1,
    lineHeight: 20,
    fontFamily: "poppins-regular",
    color: THEME.WHITE_TEXT_COLOR,
  },
  buttonWrap: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default styles;
