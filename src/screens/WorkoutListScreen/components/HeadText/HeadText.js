import { Text, StyleSheet, View } from "react-native";
import { stylesCommon } from "../../../../common/common";

import getLocales from "../../../../constants/getLocales";
import { getGreeting } from "./getGreeting";

const greeting = () => {
  const hours = new Date().getHours(); //Current Hours
  const locale = getLocales();

  return getGreeting(locale, hours);
};

export default function HeadText() {
  const text = greeting();

  return (
    <View style={styles.container}>
      <Text style={[styles.topText, stylesCommon.font400]}>{text.topText}</Text>
      <Text style={[styles.botText, stylesCommon.font400]}>{text.botText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { display: "flex", height: 150, marginTop: 50, width: "90%" },
  topText: {
    fontSize: 30,
  },
  botText: {
    fontSize: 30,
  },
});
