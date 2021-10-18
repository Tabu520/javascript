import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

// Screens
import { Home } from "./screens";

import { icons, COLORS, FONTS, SIZES } from "./constants";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

const Stack = createNativeStackNavigator();

const App = () => {
    const [loaded] = useFonts({
        "CarmenSans-Regular": require("./assets/fonts/CarmenSans-Regular.otf"),
        "CarmenSans-SemiBold": require("./assets/fonts/CarmenSans-SemiBold.otf"),
        "CarmenSans-Thin": require("./assets/fonts/CarmenSans-Thin.otf"),
        "CocoGothic-Bold": require("./assets/fonts/CocoGothic-Bold.ttf"),
        CocoGothic: require("./assets/fonts/CocoGothic.ttf"),
    });

    if (!loaded) {
        return null;
    }
    return (
        <SafeAreaProvider>
            <NavigationContainer theme={theme}>
                <Stack.Navigator initialRouteName={"Home"}>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{
                            title: "SHOE SELECTOR",
                            headerTitleAlign: "center",
                            headerTintColor: COLORS.lightGray,
                            headerTitleStyle: { ...FONTS.navTitle },
                            headerLeft: ({ onPress }) => (
                                <TouchableOpacity onPress={onPress}>
                                    <Image
                                        source={icons.menu}
                                        resizeMode="contain"
                                        style={{
                                            width: 25,
                                            height: 25,
                                        }}
                                    />
                                </TouchableOpacity>
                            ),
                            headerRight: () => (
                                <TouchableOpacity
                                    onPress={() =>
                                        console.log("Header Right on pressed!")
                                    }
                                >
                                    <Image
                                        source={icons.search}
                                        resizeMode="contain"
                                        style={{
                                            width: 30,
                                            height: 30,
                                        }}
                                    />
                                </TouchableOpacity>
                            ),
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default () => {
    return <App />;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
