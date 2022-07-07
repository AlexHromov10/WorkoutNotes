import { StyleSheet } from "react-native";

export const colorsCommon = [
  ["#F27B55", "#FFB68C"],
  ["#FFB385", "#FFD18A"],
  ["#FFD085", "#FDEDCD"],
  ["#FDEDCD", "#FDD3D7"],
];

export const fromStringDateToDMY = (date) => {
  const newDate = new Date(date);
  return `${newDate.getDate()}.${newDate.getMonth() + 1}.${newDate.getFullYear()}`;
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
