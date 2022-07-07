import { Pressable, View, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { fromStringDateToDMY } from "../../../../common/common";

export default function DatePicker(props) {
  const { date, setDate, pickerMode, maximumDate } = props;

  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View>
      {(pickerMode === "date" || pickerMode === "both") && (
        <Pressable onPress={showDatepicker}>
          <Text>{fromStringDateToDMY(date.toString())}</Text>
        </Pressable>
      )}
      {(pickerMode === "time" || pickerMode === "both") && (
        <Pressable onPress={showTimepicker}>
          <Text>{`${date.getHours()}:${date.getMinutes()}`}</Text>
        </Pressable>
      )}
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          maximumDate={maximumDate}
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
}
