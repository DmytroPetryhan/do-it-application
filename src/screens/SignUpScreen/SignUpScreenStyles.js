import { StyleSheet, Platform } from "react-native";
import { THEME } from "../../theme";

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    padding: 20,
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  signIn: {
    width: "100%",
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
    width: "100%",
    marginTop: 40,
    rowGap: 40,
  },
});
export default styles;
