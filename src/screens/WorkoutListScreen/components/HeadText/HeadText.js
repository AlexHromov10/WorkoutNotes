import { Text, StyleSheet, View } from "react-native";
import { stylesCommon } from "../../../../common/common";

import getLocales from "../../../../constants/getLocales";
import { getGreeting } from "./getGreeting";

export const greeting = () => {
  const hours = new Date().getHours(); //Current Hours
  const locale = getLocales();

  return getGreeting(locale, hours);
};

export function HeadText(props) {
  const { headText } = props;

  return (
    <View style={styles.container}>
      <Text style={[styles.topText, stylesCommon.font500]}>{headText.topText}</Text>
      <Text style={[styles.botText, stylesCommon.font500]}>{headText.botText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { display: "flex", height: 150, marginTop: 60, marginBottom: 25, width: "90%" },
  topText: {
    fontSize: 36,
    color: "#DC5C65",
  },
  botText: {
    fontSize: 36,
    color: "#DC5C65",
  },
});
