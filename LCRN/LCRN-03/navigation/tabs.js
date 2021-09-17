import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home, DestinationDetail, Onboarding } from "../screens";
import { COLORS, icons, images } from "../constants";

const Tab = createBottomTabNavigator();

const BottomImage = ({ icon, focus }) => {
    return (
        <Image
            source={icon}
            resizeMode="contain"
            style={{
                tintColor: focus ? COLORS.primary : COLORS.gray,
                width: 25,
                height: 25,
            }}
        />
    );
};

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 90,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 10,
                    },
                    shadowOpacity: 0.53,
                    shadowRadius: 13.97,
                    elevation: 21,
                },
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ focused }) => {
                        return <BottomImage icon={icons.home} focus={focused} />;
                    },
                }}
            />
            <Tab.Screen
                name="Search"
                component={Home}
                options={{
                    tabBarLabel: "Search",
                    tabBarIcon: ({ focused }) => {
                        return <BottomImage icon={icons.search} focus={focused} />;
                    },
                }}
            />
            <Tab.Screen
                name="Bookmark"
                component={Home}
                options={{
                    tabBarLabel: "Bookmark",
                    tabBarIcon: ({ focused }) => {
                        return <BottomImage icon={icons.bookmark} focus={focused} />;
                    },
                }}
            />
            <Tab.Screen
                name="Account"
                component={Home}
                options={{
                    tabBarLabel: "Account",
                    tabBarIcon: ({ focused }) => {
                        return <BottomImage icon={icons.user} focus={focused} />;
                    },
                }}
            />
        </Tab.Navigator>
    );
};

export default Tabs;
