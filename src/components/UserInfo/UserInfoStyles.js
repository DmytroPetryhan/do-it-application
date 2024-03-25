import { Platform, StyleSheet } from "react-native";
import { THEME } from "../../theme";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  userInfo: {
    marginLeft: 10,
  },
  nameText: {
    fontFamily: "poppins-bold",
    color: THEME.WHITE_TEXT_COLOR,
    fontSize: 18,
    letterSpacing: 2,
  },
  emailText: {
    fontFamily: "poppins-regular",
    color: THEME.WHITE_TEXT_COLOR,
    fontSize: 14,
    letterSpacing: 2,
    opacity: 0.5,
    textShadowColor: "black",
    textShadowRadius: Platform.OS === "ios" ? 3 : 9,
    textShadowOffset: {
      width: 2,
      height: 3,
    },
  },
});

export default styles;
