import { StyleSheet } from "react-native";
import { THEME } from "../../theme";
const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: 150,
    height: 45,
    backgroundColor: THEME.SELECT_BACKGROUNDCOLOR,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 12,
    opacity: 0.6,
    fontFamily: "poppins-regular",
    color: THEME.WHITE_TEXT_COLOR,
    textAlign: "center",
  },
  dropdownButtonArrowStyle: {
    opacity: 0.2,
    fontSize: 28,
  },
  dropDownIcon: {
    opacity: 0.2,
  },

  dropdownMenuStyle: {
    backgroundColor: THEME.SELECT_DROPDOWN_MENU_COLOR,
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontFamily: "poppins-regular",
    color: THEME.WHITE_TEXT_COLOR,
    opacity: 0.6,
  },
});

export default styles;
