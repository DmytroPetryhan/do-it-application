import { StyleSheet, Dimensions } from "react-native";
import { THEME } from "../../theme";
const { width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    padding: 20,
    rowGap: 50,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  rowContainer: {
    //flexDirection: "row",
    //alignItems: "flex-start",
  },
  text: {
    textAlign: "left",
    fontFamily: "poppins-regular",
    fontSize: 14,
    color: THEME.WHITE_TEXT_COLOR,
    letterSpacing: 1,
    opacity: 0.5,
  },
  userInfo: {
    marginTop: 5,
    justifyContent: "flex-start",
    fontFamily: "poppins-bold",
    fontSize: 16,
    color: THEME.WHITE_TEXT_COLOR,
    letterSpacing: 1,
  },
  buttonStyle: {
    opacity: 0.7,
    borderBottomWidth: 1,
    borderColor: THEME.WHITE_COLOR,
  },
  buttonTitle: {
    textAlign: "center",
    fontFamily: "poppins-bold",
    fontSize: 18,
    color: THEME.DELETE_ITEM_BUTTON_COLOR,
    letterSpacing: 1,
  },
  buttonWrap: {
    width: width - 40,
    alignItems: "center",
  },
});

export default styles;
