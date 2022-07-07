import { StyleSheet, Text, View, Button, TouchableHighlight, TouchableOpacity } from "react-native";
import { colorsCommon, screenNames, stylesCommon } from "../../../../common/common";
import { LinearGradient } from "expo-linear-gradient";

export default function Tile(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigate(screenNames.Workout, { title: props.title, lastTimeDate: props.lastTimeDate });
      }}
    >
      <LinearGradient
        // Background Linear Gradient
        colors={[colorsCommon[props.colorId], "#FFF"]}
        style={styles.container}
        end={{ x: 1, y: 0 }}
      >
        <View style={styles.colContainer}>
          <Text numberOfLines={1} style={[stylesCommon.font500, styles.title]}>
            {props.title}
          </Text>
          <Text style={[stylesCommon.font500, styles.paragraph]}>Last time trained: {props.lastTimeDate}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  linearGradient: { display: "wrap" },

  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    minWidth: "90%",
    minHeight: 131,
    marginBottom: 25,
    borderRadius: 10,
    backgroundColor: "transparent",
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
