import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Ubuntu_300Light,
  Ubuntu_300Light_Italic,
  Ubuntu_400Regular,
  Ubuntu_400Regular_Italic,
  Ubuntu_500Medium,
  Ubuntu_500Medium_Italic,
  Ubuntu_700Bold,
  Ubuntu_700Bold_Italic,
} from "@expo-google-fonts/ubuntu";

import { screenNames } from "./src/common/common";
import WorkoutTile from "./src/screens/WorkoutListScreen/components/WorkoutTile";
import WorkoutInfoScreen from "./src/screens/WorkoutInfoScreen/WorkoutInfoScreen";
import WorkoutList from "./src/screens/WorkoutListScreen/WorkoutListScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Ubuntu_300Light,
    Ubuntu_300Light_Italic,
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_500Medium,
    Ubuntu_500Medium_Italic,
    Ubuntu_700Bold,
    Ubuntu_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#F0E6EF",
            },
            headerTintColor: "#000",

            headerTitleStyle: {
              fontFamily: "Ubuntu_400Regular",
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
