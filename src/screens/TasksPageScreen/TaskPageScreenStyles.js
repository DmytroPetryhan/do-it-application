import { StyleSheet, Platform } from "react-native";
import { THEME } from "../../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  addButton: {
    position: "absolute",
    right: 10,
    bottom: 35,
    backgroundColor: THEME.ADD_BUTTON_BACKGROUNDCOLOR,
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  selectSearchWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default styles;
