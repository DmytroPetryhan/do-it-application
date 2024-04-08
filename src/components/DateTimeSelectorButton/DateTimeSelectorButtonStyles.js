import { StyleSheet, Dimensions } from "react-native";
import { THEME } from "../../theme";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: width / 2 - 30,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: THEME.NEW_ITEM_DATE_BUTTON_COLOR,
  },
  icon: {
    marginHorizontal: 15,
  },
  titleButton: {
    fontSize: 16,
    fontFamily: "poppins-regular",
    color: THEME.WHITE_TEXT_COLOR,
  },
});

export default styles;
