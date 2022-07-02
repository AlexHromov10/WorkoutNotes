import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";
import { SafeAreaView } from "react-native-safe-area-context";

import { screenNames } from "./src/common/common";
import WorkoutTile from "./src/screens/WorkoutListScreen/components/WorkoutTile";
import WorkoutInfoScreen from "./src/screens/WorkoutInfoScreen/WorkoutInfoScreen";
import WorkoutList from "./src/screens/WorkoutListScreen/WorkoutListScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>loading...</Text>
      </View>
    );
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
              fontFamily: "Inter_400Regular",
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
