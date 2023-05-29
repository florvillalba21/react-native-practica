import * as React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./src/screens/Home"
import { List } from "./src/screens/List";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Inicio" }}
        />
        <Stack.Screen
          name="List"
          component={List}
          options={{ title: "Personajes",
  }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
