import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 10,
    height: 45,
    width: "100%",
    marginTop: 50,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
  },

  input: {
    alignItems: "flex-end",
    flex: 1,
    fontSize: 20,
    marginLeft: 10,
  },
});
export default styles;
