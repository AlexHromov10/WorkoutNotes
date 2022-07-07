import { StyleSheet, ScrollView, Image, View, Text, Modal, Button, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";

import { HeadText, greeting } from "./components/HeadText/HeadText";
import List from "./components/List/List";

export default function WorkoutList({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [headText, setHeadText] = useState("");

  useEffect(() => {
    setHeadText(greeting());
  }, []);

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
      <ScrollView contentContainerStyle={[styles.container, { opacity: modalVisible ? 0.2 : 1 }]}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable style={styles.button} onPress={() => setModalVisible(false)}>
                <Text>Create</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <HeadText headText={headText} />
        <Pressable style={[styles.button, { opacity: modalVisible ? 0.2 : 1 }]} onPress={() => setModalVisible(true)}>
          <Text>Create</Text>
        </Pressable>

        <List navigation={navigation} />

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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

// <SafeAreaView style={{ backgroundColor: "#FFF", display: "flex" }}>
//</SafeAreaView>
