import { StyleSheet, Platform } from "react-native";
import { THEME } from "../../theme";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
  },
  safeArea: {
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  keyboardView: {
    flex: 1,
  },
  signIn: {
    paddingVertical: 20,
    justifyContent: "center",
    flexDirection: "row",
  },
  btnTitle: {
    letterSpacing: 1.5,
    fontFamily: "poppins-regular",
    color: THEME.WHITE_TEXT_COLOR,
  },
  formContainer: {
    marginTop: 40,
    justifyContent: "space-between",
    rowGap: 40,
  },
});
export default styles;
