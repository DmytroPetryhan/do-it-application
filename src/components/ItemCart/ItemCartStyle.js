import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: THEME.ITEM_CART_BACKGROUNDCOLOR,
  },
  title: {
    fontFamily: "poppins-regular",
    fontSize: 16,
    letterSpacing: 1,
    color: THEME.BLACK_TEXT_COLOR,
  },
  contentWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconCompleted: {
    marginRight: 15,
  },
  dateText: {
    fontFamily: "poppins-regular",
    fontSize: 12,
    color: THEME.DATE_TEXT_COLOR,
  },
});

export default styles;
