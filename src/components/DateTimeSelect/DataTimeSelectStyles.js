import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrap: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#F3F2F1",

    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 90,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "black",
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "poppins-regular",
  },
});

export default styles;
