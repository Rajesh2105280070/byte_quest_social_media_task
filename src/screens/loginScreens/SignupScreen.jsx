import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { MyStatusBar } from "../../components/commonComponents/MyStatusBar";
import { LIGHTGREY, WHITE } from "../../constants/color";
import { POPPINSLIGHT, POPPINSSEMIBOLD } from "../../constants/fontPath";

export default SignupScreen = () => {
    return (
        <>
            {/* Status Bar */}
            <MyStatusBar backgroundColor={WHITE} barStyle={"dark-content"} />

            <View style={styles.container}>
                {/* Full bar container */}
                <View style={styles.childContainer}>
                    {/* Inner bar with linear gradient */}
                    <LinearGradient
                        colors={["#F7B174", "#F3A8CE"]}
                        style={styles.barContainer}
                    />
                </View>

                {/* Text Container */}
                <View style={styles.textContainer}>
                    <MaskedView
                        maskElement={
                            <Text style={styles.txt}>
                                Bring Your{" "}
                                <Text
                                    style={{
                                        ...styles.txt,
                                        fontFamily: POPPINSSEMIBOLD,
                                        fontWeight: "600",
                                        fontSize: 44, // Match the font size of the main text
                                        lineHeight: 48.4, // Match the line height
                                    }}
                                >
                                    Mindful Journey
                                </Text>
                            </Text>
                        }
                    >
                        <LinearGradient
                            colors={["#F7B174", "#F3A8CE"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.gradient}
                        />
                    </MaskedView>
                    <View style={styles.subTxt}>
                        <Text style={{ ...styles.txt, fontSize: 16, lineHeight: 24, fontFamily: POPPINSLIGHT }}>
                            Login or Sign Up to bring your Journey with
                        </Text>
                        <Text style={{ ...styles.txt, fontSize: 16, lineHeight: 24, fontFamily: POPPINSLIGHT }}>
                            Personalized Human-Like Wellness Support
                        </Text>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.subBottomContainer}>

                    </View>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE,
    },
    childContainer: {
        width: 350,
        height: 5,
        top: 132,
        left: 40,
        borderRadius: 5,
        backgroundColor: LIGHTGREY,
    },
    barContainer: {
        width: 50,
        height: 5,
        borderRadius: 100,
    },
    textContainer: {
        position: "absolute",
        top: 260,
        left: 50,
    },
    txt: {
        fontSize: 44,
        fontFamily: POPPINSLIGHT,
        textAlign: "center",
        lineHeight: 48.4,
    },
    gradient: {
        height: 200,
        width: 350,
    },
    subTxt: {
        top: -80
    },
    bottomContainer: {
        flex: 1 / 3,
        width: 452,
        height: 436,
        gap: 0,
        opacity: 0.88,
        angle: -90,
    },
    subBottomContainer: {
        width: 430,
        height: 338,
        top: 594
    }
});