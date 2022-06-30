import { StyleSheet, Text, View, Button, TouchableHighlight, TouchableOpacity } from "react-native";
import { screenNames, stylesCommon } from "../common/common";

export default function WorkoutTile(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigate(screenNames.Workout, { title: props.title, lastTimeDate: props.lastTimeDate });
      }}
    >
      <View style={styles.container}>
        <View style={styles.colContainer}>
          <Text numberOfLines={1} style={styles.title}>
            {props.title}
          </Text>
          <Text style={styles.paragraph}>Last time trained: {props.lastTimeDate}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    minWidth: "90%",
    maxHeight: 100,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: "#FCF",
    padding: 12,
  },

  colContainer: {
    display: "flex",
    flexDirection: "column",
  },

  title: {
    display: "flex",
    fontSize: 22,
  },

  paragraph: {
    display: "flex",
    fontSize: 18,
    opacity: 0.5,
  },

  button: {
    flexBasis: 10,
    maxHeight: 10,
  },
});
