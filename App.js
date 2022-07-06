import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";

import { screenNames } from "./src/common/common";
import WorkoutInfoScreen from "./src/screens/WorkoutInfoScreen/WorkoutInfoScreen";
import WorkoutList from "./src/screens/WorkoutListScreen/WorkoutListScreen";

const Stack = createNativeStackNavigator();
const fonts = {
  Ubuntu_500Medium: require("./assets/fonts/Ubuntu-Medium.ttf"),
  Ubuntu_400Regular: require("./assets/fonts/Ubuntu-Regular.ttf"),
};

export default function App() {
  const [fontsAreLoaded, setFontsAreLoaded] = useState(false);
  SplashScreen.preventAutoHideAsync();

  useEffect(() => {
    async function loadFonts() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Ubuntu_500Medium: require("./assets/fonts/Ubuntu-Medium.ttf"),
          Ubuntu_400Regular: require("./assets/fonts/Ubuntu-Regular.ttf"),
        });
      } catch (error) {
        console.log(error);
      } finally {
        setFontsAreLoaded(true);
      }
    }

    loadFonts();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsAreLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsAreLoaded]);

  if (!fontsAreLoaded) {
    return <></>;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#F0E6EF",
          },
          headerTintColor: "#000",

          headerTitleStyle: {
            fontFamily: "Ubuntu_500Medium",
            fontSize: 22,
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name={screenNames.WorkoutList}
          component={WorkoutList}
          options={{
            title: "Your workosfuts",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={screenNames.Workout}
          component={WorkoutInfoScreen}
          options={({ route }) => ({ title: route.params.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
