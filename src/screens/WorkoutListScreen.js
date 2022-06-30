import { Text, View, StyleSheet, Button, ScrollView, SafeAreaView } from "react-native";
import { screenNames } from "../common/common";
import WorkoutTile from "../components/WorkoutTile";

export default function WorkoutList({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <WorkoutTile
        id="1"
        title={"Грудь и рукиsfsfsffsfsfsfsf"}
        lastTimeDate="15.2.2022"
        navigate={navigation.navigate}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  scrollContainer: {},
});
