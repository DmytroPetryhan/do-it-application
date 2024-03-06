import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

const styles = StyleSheet.create({
  container: {
    rowGap: 25,
    paddingVertical: 5,
    width: "100%",
    alignItems: "center",
  },
  image: {
    height: 85,
    width: 85,
  },
  textWrap: {
    width: "100%",
    alignItems: "flex-start",
  },
  welcomeMessage: {
    paddingTop: 5,
    fontSize: 25,
    fontFamily: "poppins-regular",
    color: THEME.WHITE_TEXT_COLOR,
    letterSpacing: 1,
  },
  titleMessage: {
    fontSize: 27,
    letterSpacing: 1,
    fontFamily: "darumadrop-one",
  },
  reminderMessage: {
    paddingTop: 5,
    fontSize: 18,
    letterSpacing: 1,
    fontFamily: "poppins-regular",
    color: THEME.WHITE_TEXT_COLOR,
  },
});
export default styles;
