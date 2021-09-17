import React from "react";
import { Image, View, TouchableOpacity } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

// screens
import { Onboarding, DestinationDetail, Home } from "./screens/";
// tabs
import Tabs from "./navigation/tabs";
import { COLORS, icons, SIZES } from "./constants";

// theme
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
        "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
        "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
        "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    });

    if (!loaded) {
        return null;
    }
    return (
        <SafeAreaProvider>
            <NavigationContainer theme={theme}>
                <Stack.Navigator initialRouteName="">
                    {/* Screens */}
                    <Stack.Screen
                        name="Onboarding"
                        component={Onboarding}
                        options={{
                            title: null,
                            headerStyle: {
                                backgroundColor: COLORS.white,
                            },
                            headerLeft: null,
                            headerRight: () => (
                                <TouchableOpacity
                                    style={{
                                        marginRight: SIZES.padding,
                                    }}
                                    onPress={() => console.log("Header Right pressed!")}>
                                    <Image
                                        source={icons.barMenu}
                                        resizeMode="contain"
                                        style={{
                                            width: 25,
                                            height: 25,
                                        }}
                                    />
                                </TouchableOpacity>
                            ),
                        }}
                    />

                    <Stack.Screen
                        name="DestinationDetail"
                        component={DestinationDetail}
                        options={{ headerShown: false }}
                    />

                    {/* Tabs */}
                    <Stack.Screen
                        name="Home"
                        component={Tabs}
                        options={{
                            title: null,
                            headerStyle: {
                                backgroundColor: COLORS.white,
                            },
                            headerLeft: ({ onPress }) => (
                                <TouchableOpacity
                                    style={{ marginLeft: SIZES.padding }}
                                    onPress={onPress}>
                                    <Image
                                        source={icons.back}
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
                                    style={{
                                        marginRight: SIZES.padding,
                                    }}
                                    onPress={() => console.log("Menu")}>
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
