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
    color: THEME.WHITE_TEXT_COLOR,
    fontSize: 25,
    fontWeight: "600",
    letterSpacing: 1,
  },
  titleMessage: {
    fontWeight: "900",
    fontSize: 21,
    letterSpacing: 1,
  },
  reminderMessage: {
    paddingTop: 5,
    fontWeight: "600",
    fontSize: 18,
    letterSpacing: 1,
    color: THEME.WHITE_TEXT_COLOR,
  },
});
export default styles;
