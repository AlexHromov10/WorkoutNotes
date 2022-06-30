import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native";

import { screenNames } from "./src/common/common";
import WorkoutTile from "./src/components/WorkoutTile";
import WorkoutInfoScreen from "./src/screens/WorkoutInfoScreen";
import WorkoutList from "./src/screens/WorkoutListScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={screenNames.WorkoutList} component={WorkoutList} options={{ title: "Your workouts" }} />
        <Stack.Screen name={screenNames.Workout} component={WorkoutInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
