import { StyleSheet } from "react-native";

export const colorsCommon = {
  1: "#F27B55",
  2: "#F4A68F",
  3: "#FE8497",
  4: "#FDEDCD",
};

export const screenNames = { WorkoutList: "Workout List", Workout: "Workout" };

export const storageKeys = { fileName: "workoutInfo" };

export const stylesCommon = StyleSheet.create({
  font500: {
    fontFamily: "Ubuntu_500Medium",
    //fontFamily: "monospace",
  },
  font400: {
    fontFamily: "Ubuntu_400Regular",
    //fontFamily: "monospace",
  },
  h1: {
    fontSize: 26,
  },
  h2: {
    fontSize: 18,
  },
  p: {
    fontSize: 16,
  },
});
