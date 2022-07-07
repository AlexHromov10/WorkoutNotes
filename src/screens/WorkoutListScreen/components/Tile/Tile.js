import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { colorsCommon, screenNames, stylesCommon, fromStringDateToDMY } from "../../../../common/common";
import { LinearGradient } from "expo-linear-gradient";

export default function Tile(props) {
  const { navigate, title, lastTimeDate, colorId, id } = props;

  return (
    <TouchableOpacity
      onPress={() => {
        navigate(screenNames.Workout, { title: title, lastTimeDate: lastTimeDate });
      }}
    >
      <LinearGradient
        // Background Linear Gradient
        colors={colorsCommon[colorId]}
        style={styles.container}
        end={{ x: 1, y: 0 }}
      >
        <View style={styles.colContainer}>
          <Text numberOfLines={1} style={[stylesCommon.font500, styles.title]}>
            {title}
          </Text>
          <Text style={[stylesCommon.font500, styles.paragraph]}>
            Last time trained: {fromStringDateToDMY(lastTimeDate)}
          </Text>
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
    borderRadius: 33,
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
