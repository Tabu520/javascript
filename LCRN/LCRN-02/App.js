import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

// Screens
import { Home, PlantDetail } from "./screens";
// Tabs
import Tabs from "./navigation/tabs";

const Stack = createNativeStackNavigator();

const App = () => {
    const [loaded] = useFonts({
        "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
        "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
        "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    });

    if (!loaded) {
        return null;
    }
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={"Home"}
            >
                {/* Tabs */}
                <Stack.Screen name="Home" component={Tabs} />
                {/* Screens */}
                <Stack.Screen name="PlantDetail" component={PlantDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default () => {
    return <App />;
};
