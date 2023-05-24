import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 20,
    color: COLORS.text,
    textAlign: "center",
    paddingVertical: 20,
    fontFamily: "Inter-Regular",
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    fontFamily: "Inter-Regular",
  },
  label: {
    fontSize: 18,
    color: COLORS.text,
    paddingVertical: 5,
    textAlign: "center",
    fontFamily: "Inter-Regular",
  },
  input: {
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
    minWidth: 70,
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 10,
    fontFamily: "Inter-Regular",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-around",
    marginTop: 20,
    fontSize: 25,
    fontFamily: "Inter-Bold",
  },
  confirmedContainer: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 40,
    marginHorizontal: 20,
  },
  confirmedTitle: {
    fontSize: 18,
    fontFamily: "Inter-Regular",
  },
});
