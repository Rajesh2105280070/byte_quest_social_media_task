import React, { useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Pressable,
    Image,
    Alert,
    BackHandler,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { MyStatusBar } from "../../components/commonComponents/MyStatusBar";
import { LIGHTGREY, WHITE, BLACK, NEWBLACK } from "../../constants/color";
import {
    POPPINREGULAR,
    POPPINSLIGHT,
    POPPINSSEMIBOLD,
} from "../../constants/fontPath";
import { APPLELOGO, GOOGLELOGO } from "../../constants/imagePath";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";
import appleAuth, {
    AppleAuthRequestOperation,
    AppleAuthRequestScope,
} from "@invertase/react-native-apple-authentication";

export default SignupScreen = ({ navigation }) => {
    useEffect(() => {
        GoogleSignin.configure({
            webClientId: "YOUR_GOOGLE_WEB_CLIENT_ID", // Replace with your Web Client ID
        });

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            handleBackPress
        );

        return () => {
            backHandler.remove(); // Cleanup the event listener
        };
    }, []);

    const handleBackPress = () => {
        // Define what happens when the back button is pressed
        if (navigation.canGoBack()) {
            navigation.goBack();
        } else {
            Alert.alert(
                "Exit App",
                "Are you sure you want to exit?",
                [
                    {
                        text: "Cancel",
                        style: "cancel",
                    },
                    {
                        text: "Exit",
                        onPress: () => BackHandler.exitApp(),
                    },
                ],
                { cancelable: false }
            );
        }
        return true; // Prevent default behavior
    };

    const NavigateMainScreen = () => {
        navigation.navigate("Main");
    };

    const handleGoogleLogin = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log("Google User Info:", userInfo);
            NavigateMainScreen();
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                Alert.alert("Google Sign-In was canceled.");
            } else {
                Alert.alert(
                    "An error occurred during Google Sign-In.",
                    error.message
                );
            }
        }
    };

    const handleAppleLogin = async () => {
        try {
            const appleAuthRequestResponse = await appleAuth.performRequest({
                requestedOperation: AppleAuthRequestOperation.LOGIN,
                requestedScopes: [
                    AppleAuthRequestScope.EMAIL,
                    AppleAuthRequestScope.FULL_NAME,
                ],
            });

            console.log("Apple User Info:", appleAuthRequestResponse);
            NavigateMainScreen();
        } catch (error) {
            Alert.alert("An error occurred during Apple Sign-In.", error.message);
        }
    };

    return (
        <>
            {/* Status Bar */}
            <MyStatusBar backgroundColor={WHITE} barStyle={"dark-content"} />

            <View style={styles.container}>
                {/* Full bar container */}
                <View style={styles.childContainer}>
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
                                        fontSize: 44,
                                        lineHeight: 48.4,
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
                        <Text
                            style={{
                                ...styles.txt,
                                fontSize: 16,
                                lineHeight: 24,
                                fontFamily: POPPINSLIGHT,
                            }}
                        >
                            Login or Sign Up to bring your Journey with
                        </Text>
                        <Text
                            style={{
                                ...styles.txt,
                                fontSize: 16,
                                lineHeight: 24,
                                fontFamily: POPPINSLIGHT,
                            }}
                        >
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
                        {/* Linear Gradient for ImageBackground */}
                        <LinearGradient
                            colors={["#F7B174", "#F3A8CE"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.linearGradient}
                        />

                        {/* Dots Container at the Top */}
                        <View style={styles.dotsContainer}>
                            <View style={styles.activeDot} />
                            <View style={styles.inactiveDot} />
                            <View style={styles.inactiveDot} />
                        </View>

                        {/* Buttons */}
                        <Pressable onPress={handleAppleLogin} style={styles.appleButton}>
                            <Image
                                source={APPLELOGO}
                                style={[styles.logo, { tintColor: WHITE }]}
                            />
                            <Text style={styles.appleButtonText}>
                                Continue with Apple
                            </Text>
                        </Pressable>
                        <Pressable onPress={handleGoogleLogin} style={styles.googleButton}>
                            <Image source={GOOGLELOGO} style={styles.logo} />
                            <Text style={styles.googleButtonText}>
                                Continue with Google
                            </Text>
                        </Pressable>
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
        width: "100%",
        height: 436,
        opacity: 0.88,
    },
    subBottomContainer: {
        width: "100%",
        height: 338,
        top: 594,
        borderRadius: 35,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        backgroundColor: WHITE,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    imageStyle: {
        borderRadius: 35,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        opacity: 0.88,
    },
    linearGradient: {
        ...StyleSheet.absoluteFillObject,
        opacity: 0.7,
    },
    dotsContainer: {
        position: "absolute",
        top: 30, 
        alignSelf: "center",
        flexDirection: "row",
        gap: 8,
        justifyContent: "center",
        alignItems: "center",
        borderColor: WHITE,
        borderWidth: 1,
        borderRadius: 30,
        width: 60,
        height: 20
    },
    activeDot: {
        width: 8,
        height: 8,
        backgroundColor: WHITE,
        borderRadius: 4,
    },
    inactiveDot: {
        width: 8,
        height: 8,
        backgroundColor: LIGHTGREY,
        borderRadius: 4,
    },
    appleButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 370,
        height: 60,
        backgroundColor: BLACK,
        borderRadius: 50,
        marginTop: 20,
        paddingVertical: 15,
        gap: 15,
    },
    googleButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 370,
        height: 60,
        backgroundColor: WHITE,
        borderRadius: 50,
        marginTop: 20,
        paddingVertical: 15,
        gap: 15,
        borderWidth: 1,
        borderColor: NEWBLACK,
    },
    appleButtonText: {
        color: WHITE,
        fontFamily: POPPINREGULAR,
        fontSize: 16,
        fontWeight: 500,
        lineHeight: 24,
        textAlign: "left",
    },
    googleButtonText: {
        color: BLACK,
        fontFamily: POPPINREGULAR,
        fontSize: 16,
        fontWeight: 500,
        lineHeight: 24,
        textAlign: "left",
    },
    logo: {
        width: 24,
        height: 24,
        paddingVertical: 0.5,
        margin: 0,
    },
});