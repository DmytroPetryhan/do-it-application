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
  bottomSheetStyle: {
    flex: 1,
    justifyContent: "flex-end",
    shadowColor: THEME.INPUT_BACKGROUNDCOLOR,
    shadowOpacity: 0.9,
    shadowRadius: 7,
    shadowOffset: { height: 1, width: 1 },
    elevation: 5,
  },
  bottomSheetBackgroundStyle: {
    backgroundColor: "white",
    opacity: 0.4,
  },
});

export default styles;
