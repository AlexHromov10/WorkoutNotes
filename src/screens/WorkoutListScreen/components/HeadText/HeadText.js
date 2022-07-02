import { Text, StyleSheet, View } from "react-native";

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
      <Text style={styles.topText}>{text.topText}</Text>
      <Text style={styles.botText}>{text.botText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { display: "flex", height: 150, width: "90%", justifyContent: "center" },
  topText: {
    fontSize: 30,
  },
  botText: {
    fontSize: 30,
  },
});
