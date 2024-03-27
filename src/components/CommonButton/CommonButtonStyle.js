import { StyleSheet } from "react-native";
import { THEME } from "../../theme";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    height: 70,
    width: 70,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: THEME.WHITE_COLOR,
  },
  shadow: {
    shadowColor: THEME.WHITE_COLOR,
    shadowOffset: {
      height: 5,
      width: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8,
  },
});

export default styles;
