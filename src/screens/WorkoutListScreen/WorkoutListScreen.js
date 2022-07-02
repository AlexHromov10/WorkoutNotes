import { Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import HeadText from "./components/HeadText/HeadText";
import WorkoutTile from "./components/WorkoutTile";
import { storageKeys } from "../../common/common";

export default function WorkoutList({ navigation }) {
  const [tiles, setTiles] = useState([]);

  return (
    <SafeAreaView style={{ backgroundColor: "#F0E6EF", display: "flex" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <HeadText />

        {tiles.map((tile) => {
          <WorkoutTile id={tile.id} title={tile.title} lastTimeDate={tile.date} navigate={navigation.navigate} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F0E6EF",
    alignItems: "center",
    minHeight: "100%",
  },
  scrollContainer: {},
});
