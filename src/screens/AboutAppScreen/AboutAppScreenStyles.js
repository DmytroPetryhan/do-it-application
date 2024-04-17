import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: "poppins-regular",
    color: THEME.WHITE_TEXT_COLOR,
    letterSpacing: 1,
  },
});

export default styles;
