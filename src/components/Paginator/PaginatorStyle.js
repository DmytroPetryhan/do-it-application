import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  dotWrap: {
    flexDirection: "row",
  },

  dot: {
    height: 7,
    width: 7,
    marginHorizontal: 3,
    borderRadius: 4,
    backgroundColor: THEME.DOT_UNACTIVE_COLOR,
  },
  dotActive: {
    height: 7,
    width: 10,
    marginHorizontal: 5,
    borderRadius: 4,
    backgroundColor: THEME.DOT_ACTIVE_COLOR,
  },
});
export default styles;
