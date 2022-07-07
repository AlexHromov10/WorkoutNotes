import { useState } from "react";
import { Modal, View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import { TouchableWithoutFeedback } from "react-native-web";
import { fromStringDateToDMY } from "../../../../common/common";
import DatePicker from "./DatePicker";

const defaultValue = "Грудь";

export default function CreateTileModal(props) {
  const { createWorkoutTile, modalVisible, setModalVisible } = props;

  const [titleValue, setTitleValue] = useState(defaultValue);
  const [date, setDate] = useState(new Date());

  const onSubmitHandler = () => {
    setModalVisible(false);
    createWorkoutTile(titleValue, date);
    setTitleValue(defaultValue);
    setDate(new Date());
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <TouchableWithoutFeedback
        onPressOut={() => {
          console.log("PRES");
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <TouchableWithoutFeedback>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <TextInput
                autoFocus={false}
                value={titleValue}
                onChangeText={(text) => setTitleValue(text)}
                onSubmitEditing={onSubmitHandler}
              />
              <DatePicker date={date} setDate={setDate} pickerMode="date" maximumDate={new Date()} />
              <Pressable style={styles.button} onPress={onSubmitHandler}>
                <Text>Create</Text>
              </Pressable>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
