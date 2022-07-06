import { StyleSheet, ScrollView, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import HeadText from "./components/HeadText/HeadText";
import WorkoutTile from "./components/WorkoutTile";
import { colorsCommon } from "../../common/common";

export default function WorkoutList({ navigation }) {
  const [tiles, setTiles] = useState([]);

  return (
    // <SafeAreaView style={{ backgroundColor: "#FFF", display: "flex" }}>
    <View style={{ backgroundColor: "#FFF", display: "flex" }}>
      <Image
        style={{ resizeMode: "cover", position: "absolute", top: 0, left: 0 }}
        source={require("../../../assets/WorkoutListAssets/BG.png")}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <HeadText />
        <WorkoutTile
          id="1"
          title="Плечи"
          lastTimeDate="21.02.2022"
          navigate={navigation.navigate}
          color={colorsCommon[1]}
        />
        <WorkoutTile
          id="1"
          title="Ноги"
          lastTimeDate="10.04.2022"
          navigate={navigation.navigate}
          color={colorsCommon[2]}
        />
        <WorkoutTile
          id="1"
          title="Грудь"
          lastTimeDate="24.02.2022"
          navigate={navigation.navigate}
          color={colorsCommon[3]}
        />
        <WorkoutTile
          id="1"
          title="Руки"
          lastTimeDate="18.02.2022"
          navigate={navigation.navigate}
          color={colorsCommon[4]}
        />
        <WorkoutTile
          id="1"
          title="Плечи"
          lastTimeDate="21.02.2022"
          navigate={navigation.navigate}
          color={colorsCommon[1]}
        />
        <WorkoutTile
          id="1"
          title="Ноги"
          lastTimeDate="10.04.2022"
          navigate={navigation.navigate}
          color={colorsCommon[2]}
        />
        <WorkoutTile
          id="1"
          title="Грудь"
          lastTimeDate="24.02.2022"
          navigate={navigation.navigate}
          color={colorsCommon[3]}
        />
        <WorkoutTile
          id="1"
          title="Руки"
          lastTimeDate="18.02.2022"
          navigate={navigation.navigate}
          color={colorsCommon[4]}
        />
      </ScrollView>
    </View>
    //</SafeAreaView>
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
