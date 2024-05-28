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
    marginBottom: 10,
    height: 140,
    justifyContent: "space-between",
  },
  forgetPassworButton: {
    alignItems: "flex-end",
  },
  navigationButton: {
    borderBottomWidth: 0.5,
    borderBottomColor: THEME.WHITE_COLOR,
    marginVertical: 30,
  },
});

export default styles;
