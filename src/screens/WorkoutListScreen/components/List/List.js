import { useEffect, useState } from "react";
import { Button } from "react-native";

import Tile from "../Tile/Tile";
import { storageKeys } from "../../../../common/common";
import { readFile, writeToFile } from "../../../../common/fileSystem";

export default function List({ navigation }) {
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

  const createWorkoutTile = (newTile) => {
    setTiles([...tiles, newTile]);
  };

  const deleteAll = async () => {
    setTiles([]);
  };

  const newTile = {
    key: tiles.length,
    title: "Плечи",
    lastTimeDate: "21.02.2022",
    colorId: "2",
  };

  return (
    <>
      <Button
        title="Create Some test"
        onPress={() => {
          createWorkoutTile(newTile);
        }}
      />
      <Button title="Delete all" onPress={deleteAll} />
      {tiles.map((tile) => (
        <Tile
          key={tile.key}
          title={tile.title}
          lastTimeDate={tile.lastTimeDate}
          colorId={tile.colorId}
          navigate={navigation.navigate}
        />
      ))}
    </>
  );
}
