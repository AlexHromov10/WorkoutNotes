import { StyleSheet, ScrollView, Image, View, Text, Modal, Button, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";

import { HeadText, greeting } from "./components/HeadText/HeadText";
import List from "./components/List/List";
import CreateTileModal from "./components/CreateTileModal/CreateTileModal";
import { readFile, writeToFile } from "../../common/fileSystem";
import { storageKeys } from "../../common/common";

export default function WorkoutList({ navigation }) {
  const [tiles, setTiles] = useState([]);
  const [headText, setHeadText] = useState("");
  const [key, setKey] = useState(0);

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    async () => setTiles(JSON.parse(await readFile(storageKeys.fileName)));
    setHeadText(greeting());
  }, []);

  useEffect(() => {
    async () => await writeToFile(storageKeys.fileName, JSON.stringify(tiles));
  }, [tiles]);

  const createWorkoutTile = (titleValue, date) => {
    const newTile = {
      title: titleValue,
      lastTimeDate: date.toString(),
      id: key,
      colorId: key % 4,
    };
    setKey(key.valueOf() + 1);

    setTiles([...tiles, newTile]);
  };

  const deleteAll = async () => {
    setTiles([]);
  };

  return (
    <View style={{ backgroundColor: "#FFF", display: "flex" }}>
      <Image
        style={{
          resizeMode: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          opacity: modalVisible ? 0.2 : 1,
        }}
        source={require("../../../assets/WorkoutListAssets/BG.png")}
      />
      <ScrollView
        contentContainerStyle={[styles.container, { opacity: modalVisible ? 0.2 : 1 }]}
        onPress={() => {
          console.log("PRESS");
        }}
      >
        <CreateTileModal
          createWorkoutTile={createWorkoutTile}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />

        <HeadText headText={headText} />

        <Button title="Delete all" onPress={deleteAll} />

        <List tiles={tiles} navigation={navigation} />
      </ScrollView>
      <Pressable style={[styles.button, { opacity: modalVisible ? 0.2 : 1 }]} onPress={() => setModalVisible(true)}>
        <Text style={{ fontSize: 36, color: "#FFF" }}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100%",
  },
  button: {
    position: "absolute",
    left: "80%",
    top: "90%",
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    padding: 10,
    elevation: 2,
    backgroundColor: "#DC5C65",
  },
});

// <SafeAreaView style={{ backgroundColor: "#FFF", display: "flex" }}>
//</SafeAreaView>
