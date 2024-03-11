import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
  },
  bottomContainer: {
    position: "absolute",
    bottom: height / 8,
    width: width - width / 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default styles;
