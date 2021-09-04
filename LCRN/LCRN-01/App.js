import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

import OnBoarding from "./app/screens/OnBoarding/OnBoarding";

const Stack = createNativeStackNavigator();

function App() {
    const [loaded] = useFonts({
        "Roboto-Black": require("./app/assets/fonts/Roboto-Black.ttf"),
        "Roboto-Bold": require("./app/assets/fonts/Roboto-Bold.ttf"),
        "Roboto-Regular": require("./app/assets/fonts/Roboto-Regular.ttf"),
    });

    if (!loaded) {
        return null;
    }
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={OnBoarding}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

export default App;
