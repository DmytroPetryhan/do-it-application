import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    height: 55,
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: THEME.ITEM_CART_BACKGROUNDCOLOR,
  },
  title: {
    fontFamily: "poppins-regular",
    fontSize: 15,
  },
  contentWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconCompleted: {
    marginRight: 15,
  },
});

export default styles;
