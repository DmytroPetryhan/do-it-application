import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  contentWrap: {
    alignItems: "center",
  },
  titleText: {
    margin: 25,
    fontFamily: "darumadrop-one",
    fontSize: 36,
    fontWeight: "bold",
    color: THEME.WHITE_TEXT_COLOR,
  },
  versionText: {
    fontSize: 20,
    fontFamily: "poppins-regular",
    color: THEME.WHITE_TEXT_COLOR,
  },
});

export default styles;
