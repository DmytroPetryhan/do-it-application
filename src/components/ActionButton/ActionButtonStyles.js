import { StyleSheet } from "react-native";
import { THEME } from "../../theme";
const styles = StyleSheet.create({
  container: {
    padding: 8,
    height: 70,
    width: 90,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: THEME.ACTION_BUTTON_BACKGROUNDCOLOR,
    shadowColor: THEME.WHITE_COLOR,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowRadius: 5,
    shadowOpacity: 0.4,
  },
  titleText: {
    fontSize: 14,
    fontFamily: "poppins-regular",
    color: THEME.WHITE_TEXT_COLOR,
  },
});

export default styles;
