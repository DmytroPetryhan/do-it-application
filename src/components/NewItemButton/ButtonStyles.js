import { StyleSheet, Dimensions } from "react-native";
import { THEME } from "../../theme";
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    height: 40,
    width: width / 2 - 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: THEME.NEW_ITEM_BUTTON_COLOR,
  },
  titleButton: {
    fontFamily: "poppins-regular",
  },
});

export default styles;
