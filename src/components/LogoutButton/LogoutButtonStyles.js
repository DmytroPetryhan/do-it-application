import { StyleSheet, Dimensions } from "react-native";
import { THEME } from "../../theme";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: width / 2,
    borderRadius: "50%",
    backgroundColor: THEME.WHITE_COLOR,
  },
  textButton: {
    fontSize: 16,
    fontFamily: "poppins-regular",
    color: THEME.WARNING_RED_COLOR,
    marginLeft: 5,
  },
});

export default styles;
