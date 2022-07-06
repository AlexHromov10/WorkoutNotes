import { StyleSheet, ScrollView, Image, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";

import HeadText from "./components/HeadText/HeadText";
import WorkoutTile from "./components/WorkoutTile";
import { colorsCommon, storageKeys } from "../../common/common";
import { deleteFile, readFile, writeToFile } from "../../common/fileSystem";

export default function WorkoutList({ navigation }) {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    async function read() {
      setTiles(JSON.parse(await readFile(storageKeys.fileName)));
    }
    read();
  }, []);

  useEffect(() => {
    async function write() {
      await writeToFile(storageKeys.fileName, JSON.stringify(tiles));
    }
    write();
  }, [tiles]);

  const createWorkoutTile = () => {
    const props = {
      key: tiles.length,
      title: "Плечи",
      lastTimeDate: "21.02.2022",
      colorId: "2",
    };

    setTiles([...tiles, props]);
  };

  const deleteAll = async () => {
    setTiles([]);
  };

  return (
    <View style={{ backgroundColor: "#FFF", display: "flex" }}>
      <Image
        style={{ resizeMode: "cover", position: "absolute", top: 0, left: 0 }}
        source={require("../../../assets/WorkoutListAssets/BG.png")}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <HeadText />

        <Button title="Create Some test" onPress={createWorkoutTile} />
        <Button title="Delete all" onPress={deleteAll} />

        {tiles.map((tile) => (
          <WorkoutTile
            key={tile.key}
            title={tile.title}
            lastTimeDate={tile.lastTimeDate}
            colorId={tile.colorId}
            navigate={navigation.navigate}
          />
        ))}
        {/* <WorkoutTile id="1" title="Плечи" lastTimeDate="21.02.2022" navigate={navigation.navigate} colorId="1" /> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    // backgroundColor: "#F0E6EF",

    alignItems: "center",
    minHeight: "100%",
  },
});

// <SafeAreaView style={{ backgroundColor: "#FFF", display: "flex" }}>
//</SafeAreaView>
