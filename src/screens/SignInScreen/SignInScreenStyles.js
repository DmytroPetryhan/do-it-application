import { StyleSheet, Platform } from "react-native";
import { THEME } from "../../theme";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
  },
  safeArea: {
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  keyboardView: {
    flex: 1,
  },
  signUp: {
    paddingVertical: 20,
    justifyContent: "center",
    flexDirection: "row",
  },
  btnTitle: {
    fontFamily: "poppins-regular",
    color: THEME.WHITE_TEXT_COLOR,
    letterSpacing: 1.5,
  },
  inputContainer: {
    marginTop: 40,
    height: 150,
    justifyContent: "space-between",
  },
  forgetPassworButton: {
    alignItems: "flex-end",
  },
});

export default styles;
