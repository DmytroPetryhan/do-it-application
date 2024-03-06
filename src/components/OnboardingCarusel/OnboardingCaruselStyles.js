import { StyleSheet, Dimensions } from "react-native";
import { THEME } from "../../theme";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width,
    paddingBottom: "50%",
    alignItems: "center",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  imageWrap: {
    width,
    alignItems: "center",
    justifyContent: "center",
    height: "60%",
  },
  titleWrap: {
    height: "20%",
    justifyContent: "flex-start",
    paddingHorizontal: 60,
  },
  textStyle: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "poppins-regular",
    color: THEME.WHITE_COLOR,
  },
});
export default styles;
