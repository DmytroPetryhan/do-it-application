import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  textWrap: {
    flex: 0.7,
    width: "100%",
    rowGap: 15,
    justifyContent: "center",
  },
  text: {
    color: THEME.WHITE_TEXT_COLOR,
    fontSize: 18,
    fontFamily: "poppins-regular",
    letterSpacing: 1,
    marginLeft: 10,
  },
  secondContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  iconText: {
    flexDirection: "row",
  },
});
export default styles;
