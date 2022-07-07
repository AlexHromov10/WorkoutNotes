import { Text, View, StyleSheet } from "react-native";
import { fromStringDateToDMY } from "../../common/common";

export default function WorkoutInfoScreen({ route, navigation }) {
  return (
    <View style={styles.container}>
      <Text>{route.params.title}</Text>
      <Text>{fromStringDateToDMY(route.params.lastTimeDate)}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
