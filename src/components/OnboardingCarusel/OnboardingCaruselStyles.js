import { StyleSheet, Dimensions } from "react-native";
import { THEME } from "../../theme";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    width,
    paddingBottom: "50%",
    alignItems: "center",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  imageWrap: {
    justifyContent: "center",
    height: "60%",
  },
  titleWrap: {
    height: "20%",
    justifyContent: "flex-start",
    paddingHorizontal: 70,
  },
  textStyle: {
    textAlign: "center",
    fontSize: 20,
    color: THEME.WHITE_COLOR,
  },
});
export default styles;
