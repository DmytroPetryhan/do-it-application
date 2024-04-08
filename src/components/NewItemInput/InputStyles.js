import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    backgroundColor: THEME.INPUT_BACKGROUNDCOLOR,
  },

  text: {
    flex: 1,
    marginLeft: 10,
    textAlignVertical: "top",
    letterSpacing: 1,
    fontFamily: "poppins-regular",
    fontSize: 15,
    color: THEME.WHITE_TEXT_COLOR,
  },
});
export default styles;
