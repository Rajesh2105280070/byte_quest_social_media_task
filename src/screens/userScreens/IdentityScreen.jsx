import React from "react";
import { StyleSheet, View } from "react-native";
import { LIGHTGREY, WHITE } from "../../constants/color";
import { MyStatusBar } from "../../components/commonComponents/MyStatusBar";
import LinearGradient from "react-native-linear-gradient";

export default IdentityScreen = () => {
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
            </View>
        </>
    )
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
})