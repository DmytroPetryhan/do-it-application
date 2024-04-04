import { StyleSheet, Platform } from "react-native";
import { THEME } from "../../theme";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: THEME.WHITE_COLOR,
    rowGap: 30,
  },
  buttonWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Platform.OS === "ios" ? 30 : 0,
  },
});

export default styles;
