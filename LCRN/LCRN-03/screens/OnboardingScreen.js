import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, images, SIZES, FONTS } from "../constants";

const Onboarding = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
                <Image
                    source={images.onboardingImage}
                    resizeMode="contain"
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                />
            </View>

            <View style={styles.view}>
                <View style={{ alignItems: "center", marginHorizontal: SIZES.padding }}>
                    <Text style={{ ...FONTS.h2 }}>Digital Ticket</Text>
                    <Text
                        style={{
                            color: COLORS.gray,
                            marginTop: SIZES.padding,
                            textAlign: "center",
                            ...FONTS.body3,
                        }}>
                        Easy solution to buy tickets for your travel, business trips,
                        transportation, lodging and culinary
                    </Text>
                </View>
                <TouchableOpacity
                    style={[
                        styles.shadow,
                        {
                            marginTop: SIZES.padding * 2,
                            width: "70%",
                            height: 50,
                            alignItems: "center",
                            justifyContent: "center",
                        },
                    ]}
                    onPress={() => navigation.navigate("Home")}>
                    <LinearGradient
                        style={{
                            height: "100%",
                            width: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 15,
                        }}
                        colors={["#46aeff", "#5884ff"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Start !</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});

export default Onboarding;
