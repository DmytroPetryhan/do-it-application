import { StyleSheet, Dimensions } from "react-native";
import { THEME } from "../../theme";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 10,
    height: 45,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    borderWidth: 2,
  },

  input: {
    alignItems: "flex-end",
    flex: 1,
    fontSize: 20,
    fontFamily: "poppins-regular",
    marginLeft: 10,
  },
  passwordWarning: {
    marginBottom: 5,
    fontSize: 14,
    color: THEME.WARNING_RED_COLOR,
    fontFamily: "poppins-regular",
  },
});
export default styles;
