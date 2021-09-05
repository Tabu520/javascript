import React from "react";
import { View, Text, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { COLORS, icons } from "../constants";
import { Home } from "../screens";

const Tab = createBottomTabNavigator();

const tabOptions = {
    showLabel: false,
    style: {
        height: "10%",
    },
};

const CameraButton = () => {
    return (
        <View
            style={{
                alignItems: "center",
                justifyContent: "center",
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: COLORS.primary,
            }}
        >
            <Image
                source={icons.camera}
                resizeMode="contain"
                style={{
                    width: 23,
                    height: 23,
                }}
            />
        </View>
    );
};

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({focused}) => {
                        return (
                            <Image
                                source={icons.flash}
                                resizeMode="contain"
                                style={{
                                    tintColor: focused ? COLORS.primary : COLORS.gray,
                                    width: 25,
                                    height: 25,
                                }}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Box"
                component={Home}
                options={{
                    tabBarLabel: "Box",
                    tabBarIcon:({focused}) => {
                        return (
                            <Image
                                source={icons.cube}
                                resizeMode="contain"
                                style={{
                                    tintColor: focused ? COLORS.primary : COLORS.gray,
                                    width: 25,
                                    height: 25,
                                }}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen 
                name="Camera"
                component={Home}
                options= {{
                    tabBarLabel: "Camera",
                    tabBarIcon: () => {
                        return <CameraButton />
                    }
                }}
            />
            <Tab.Screen 
                name="Search" 
                component={Home}
                options={{
                    tabBarLabel: "Search",
                    tabBarIcon:({focused}) => {
                        return (
                            <Image
                                source={icons.search}
                                resizeMode="contain"
                                style={{
                                    tintColor: focused ? COLORS.primary : COLORS.gray,
                                    width: 25,
                                    height: 25,
                                }}
                            />
                        );
                    },
                }}    
            />
            <Tab.Screen 
                name="Favorite"
                component={Home}
                options={{
                    tabBarLabel: "Favorite",
                    tabBarIcon:({focused}) => {
                        return (
                            <Image
                                source={icons.heartIcon}
                                resizeMode="contain"
                                style={{
                                    tintColor: focused ? COLORS.primary : COLORS.gray,
                                    width: 25,
                                    height: 25,
                                }}
                            />
                        );
                    },
                }}  
            />
        </Tab.Navigator>
    );
};

export default Tabs;
