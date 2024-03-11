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
  signUp: {
    width: "100%",
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
});

export default styles;
