import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
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

                {/* Bottom Container with Background Image */}
                <View style={styles.bottomContainer}>
                    <ImageBackground
                        source={{
                            uri: "https://s3-alpha-sig.figma.com/img/3648/5532/0f08ade1d04f13556e9f3defb0d52bcb?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hb6OkrG9gq7T6~z3xnXaU~mhHNs5cdELQg2LA4UQEti4JqnkWcMSxxpUcI4jFxB9vJY7oYr7LwuI7~wgDTPN-X225vyHIwqfEbpx3P3XCUq4EoMVC2FLA8X0zSby6uRW5thBawy7Hj1fmOdLWzSnxEnrNP4qsOkwXsPy811kcvfflf9rQNHVwPxKI7YlVkJCn7yq5FefvyshV8sENjW6deLA0isTlqgN2iKp4P5immjX9kARgwBj1nblLRC8dwslk1Y-MdcWFmqBaANrrxiBheZNTrF-tf4selarnkEHfVvS4MREPoD5Q7kbaN5oqchFP3BMLmoQfq7PxmkeIkeLsQ__",
                        }}
                        style={styles.subBottomContainer}
                        imageStyle={styles.imageStyle}
                    >
                        {/* Linear gradient overlay */}
                        <LinearGradient
                            colors={["#F7B174", "#F3A8CE"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.gradientOverlay}
                        />

                        {/* Dots Container */}
                        <View style={styles.dotsContainer}>
                            <View style={styles.activeDot} />
                            <View style={styles.inactiveDot} />
                            <View style={styles.inactiveDot} />
                        </View>
                    </ImageBackground>
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
        top: -80,
    },
    bottomContainer: {
        flex: 1 / 3,
        width: 452,
        height: 436,
        gap: 0,
        opacity: 0.88,
    },
    subBottomContainer: {
        width: 430,
        height: 338,
        top: 594,
        paddingVertical: 40,
        paddingHorizontal: 30,
        borderRadius: 35,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        backgroundColor: "#FFFFFF", // Base white color
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -61,
        },
        shadowOpacity: 0.15,
        shadowRadius: 61,
        elevation: 5,
        justifyContent: "center", // Center content vertically
        alignItems: "center",    // Center content horizontally
    },
    imageStyle: {
        borderRadius: 35,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        opacity: 0.88,
    },
    gradientOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 35,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
    },
    dotsContainer: {
        position: "absolute", // Ensures placement inside ImageBackground
        bottom: 20,           // Adjusts the position from the bottom of the container
        left: "50%",          // Centers the dots horizontally
        transform: [{ translateX: -24 }], // Offset half the width of the container
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 8, // Space between dots
    },
    activeDot: {
        width: 8,
        height: 8,
        backgroundColor: "#FFFFFF",
        borderRadius: 4,
    },
    inactiveDot: {
        width: 8,
        height: 8,
        backgroundColor: LIGHTGREY,
        borderRadius: 4,
    },
});
