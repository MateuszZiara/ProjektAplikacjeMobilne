import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";


export function Bilety2({ navigation }){
    return (
        <View style={styles.wzr}>
            <View style={[styles.headerEkranuPrzeksek, styles.sliderLayout]}>
                <View style={[styles.slider, styles.sliderLayout]}>
                    <Image
                        style={[styles.image2Icon, styles.image2IconPosition]}
                        contentFit="cover"
                        source={require("./assets/image-2.png")}
                    />
                    <LinearGradient
                        style={[styles.sliderChild, styles.image2IconPosition]}
                        locations={[0, 0.48, 1]}
                        colors={[
                            "rgba(0, 0, 0, 0.5)",
                            "rgba(255, 255, 255, 0)",
                            "rgba(0, 0, 0, 0.5)",
                        ]}
                    />
                    <View style={styles.sliderItem} />
                    <LinearGradient
                        style={styles.sliderInner}
                        locations={[0.53, 1]}
                        colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"]}
                    />
                </View>
            </View>

            <View style={[styles.biletUlgowyParent, styles.parentBg]}>
                <Text style={[styles.biletUlgowy, styles.zTypo]}>Bilet ulgowy</Text>
                <Text style={[styles.z, styles.zTypo]}>16 zł</Text>
                <Image
                    style={styles.maskGroupIcon2}
                    contentFit="cover"
                    source={require("./assets/mask-group2.png")}
                />
                <View style={[styles.parent, styles.parentBg]}>
                    <View style={styles.view}>
                        <LinearGradient
                            style={[styles.child, styles.childPosition]}
                            locations={[0, 1]}
                            colors={["rgba(252, 252, 252, 0.2)", "rgba(123, 122, 122, 0.2)"]}
                        />
                        <Text style={[styles.text1, styles.textTypo]}>-</Text>
                    </View>
                    <View style={[styles.counter, styles.view1ShadowBox]}>
                        <View style={[styles.counterChild, styles.childPosition]} />
                        <Text style={[styles.text2, styles.textTypo]}>1</Text>
                    </View>
                    <View style={[styles.view1, styles.view1ShadowBox]}>
                        <LinearGradient
                            style={[styles.child, styles.childPosition]}
                            locations={[0, 1]}
                            colors={["rgba(136, 243, 28, 0.2)", "rgba(82, 158, 5, 0.2)"]}
                        />
                        <Text style={[styles.text3, styles.textTypo]}>+</Text>
                    </View>
                </View>
            </View>
            <View style={styles.backParent}>
                <Image
                    style={styles.backIcon}
                    contentFit="cover"
                    source={require("./assets/back.png")}
                />
                <View style={[styles.frameWrapper, styles.frameFlexBox]}>
                    <View style={styles.appNameWrapper}>
                        <View style={[styles.appName, styles.appSpaceBlock]}>
                            <Text style={[styles.ustawienia, styles.ustawieniaClr]}>
                                Bilety
                            </Text>
                            <Text style={[styles.ustawieniaKonta, styles.biletyTypo]}>
                                Ulgowy
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.frameParent}>
                <View style={[styles.frameContainer, styles.frameFlexBox]}>
                    <View style={styles.appNameContainer}>
                        <View style={[styles.appName1, styles.appSpaceBlock]}>
                            <Text style={[styles.dlaCiebieI, styles.garyLeeTypo]}>
                                Dla ciebie i dla rodziny
                            </Text>
                            <Text style={[styles.bilety, styles.biletyTypo]}>Bilety</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.vectorWrapper}>
                    <Image
                        style={styles.frameChild}
                        contentFit="cover"
                        source={require("./assets/ellipse-19.png")}
                    />
                </View>
            </View>
            <View style={styles.rectangleParent}>
                <View style={styles.frameItem} />
                <View style={styles.garyLeeParent}>
                    <Text style={[styles.garyLee, styles.garyLeeTypo]}>
                        Wybierz seans
                    </Text>
                    <Image
                        style={[styles.maskGroupIcon3, styles.iconLayout]}
                        contentFit="cover"
                        source={require("./assets/mask-group3.png")}
                    />
                </View>
            </View>
        </View>
    );
}
export const FontFamily = {
    poppinsMedium: "Poppins-Medium",
    poppinsSemiBold: "Poppins-SemiBold",
    poppinsBold: "Poppins-Bold",
    berlinSansFB: "Berlin Sans FB",
};
/* font sizes */
export const FontSize = {
    size_mid: 17,
    size_lg: 18,
};
/* Colors */
export const Color = {
    colorBlack: "#000",
    colorGray_100: "rgba(255, 255, 255, 0.1)",
    colorWhitesmoke: "#ececec",
    colorWhite: "#fff",
    colorLightgray: "#cbcbcb",
};
/* Paddings */
export const Padding = {
    p_8xs: 5,
};
/* border radiuses */
export const Border = {
    br_smi: 13,
    br_sm: 14,
    br_11xl: 30,
};
const styles = StyleSheet.create({
    navigationBarPosition: {
        width: 430,
        bottom: 0,
        position: "absolute",
    },
    iconLayout: {
        height: 35,
        width: 35,
    },
    sliderLayout: {
        height: 186,
        width: 578,
        position: "absolute",
    },
    image2IconPosition: {
        height: 184,
        top: 0,
        position: "absolute",
    },
    iphonestatusbarPosition: {
        marginLeft: -176,
        left: "50%",
        position: "absolute",
    },
    parentBg: {
        backgroundColor: Color.colorGray_100,
        position: "absolute",
        overflow: "hidden",
    },
    zTypo: {
        color: Color.colorLightgray,
       // fontFamily: FontFamily.poppinsBold,
        fontWeight: "700",
        fontSize: FontSize.size_lg,
        textAlign: "left",
        left: "50%",
        position: "absolute",
    },
    childPosition: {
        borderRadius: Border.br_sm,
        height: 42,
        top: 0,
        left: 0,
        position: "absolute",
    },
    textTypo: {
        color: Color.colorBlack,
       // fontFamily: FontFamily.poppinsBold,
        fontWeight: "700",
        fontSize: FontSize.size_lg,
        textAlign: "left",
        left: "50%",
        position: "absolute",
    },
    view1ShadowBox: {
        marginLeft: 10,
        height: 42,
        shadowOpacity: 1,
        elevation: 5,
        shadowRadius: 5,
        shadowOffset: {
            width: 5,
            height: 3,
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
    },
    frameFlexBox: {
        height: 73,
        alignItems: "center",
        flexDirection: "row",
    },
    appSpaceBlock: {
        paddingVertical: Padding.p_8xs,
        paddingHorizontal: 0,
        height: 106,
        justifyContent: "center",
        overflow: "hidden",
    },
    ustawieniaClr: {
        color: Color.colorWhitesmoke,
        width: 322,
    },
    biletyTypo: {
      //  fontFamily: FontFamily.poppinsSemiBold,
        fontWeight: "600",
        color: Color.colorWhitesmoke,
        textAlign: "left",
    },
    garyLeeTypo: {
        height: 53,
     //   fontFamily: FontFamily.poppinsMedium,
        fontWeight: "500",
        fontSize: FontSize.size_mid,
        textAlign: "left",
    },
    popcorninactiveIcon: {
        marginLeft: 58,
    },
    homeinactiveParent: {
        top: 18,
        left: 31,
        width: 368,
        height: 58,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
    },
    line: {
        borderRadius: 575,
        width: 169,
        height: 5,
        backgroundColor: Color.colorWhite,
    },
    iphoneIndicator: {
        paddingHorizontal: 101,
        paddingVertical: 48,
        height: 32,
        left: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    navigationBarChild: {
        top: 20,
        left: 233,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        height: 59,
        width: 58,
        borderRadius: Border.br_smi,
        position: "absolute",
        overflow: "hidden",
    },
    navigationBar: {
        marginLeft: -215,
        borderBottomRightRadius: Border.br_11xl,
        borderBottomLeftRadius: Border.br_11xl,
        backgroundColor: "#141414",
        height: 142,
        left: "50%",
        overflow: "hidden",
    },
    image2Icon: {
        left: 3,
        width: 434,
    },
    sliderChild: {
        backgroundColor: "transparent",
        width: 578,
        height: 184,
        left: 0,
    },
    sliderItem: {
        left: 21,
        width: 367,
        height: 40,
        top: 0,
        position: "absolute",
    },
    sliderInner: {
        top: 121,
        left: 1,
        width: 375,
        height: 65,
        backgroundColor: "transparent",
        position: "absolute",
    },
    slider: {
        top: 0,
        left: 0,
    },
    headerEkranuPrzeksek: {
        top: 21,
        left: -3,
    },
    text: {
        fontSize: 19,
      //  fontFamily: FontFamily.berlinSansFB,
        color: Color.colorWhite,
        display: "flex",
        width: 43,
        height: 20,
        textAlign: "left",
        alignItems: "center",
    },
    signalIcon: {
        width: 18,
        height: 18,
    },
    wiFiIcon: {
        width: 24,
        height: 22,
        marginLeft: 6,
    },
    fullBatteryIcon: {
        width: 29,
        marginLeft: 6,
        height: 32,
    },
    signalParent: {
        marginLeft: 226,
        alignItems: "center",
        flexDirection: "row",
    },
    iphonestatusbar: {
        backgroundColor: "rgba(0, 0, 0, 0)",
        top: 0,
        alignItems: "center",
        flexDirection: "row",
    },
    iphonestatusbarOgranicznik: {
        top: 5,
        width: 352,
        height: 32,
    },
    biletUlgowy: {
        marginLeft: -56,
        top: 187,
    },
    z: {
        marginLeft: -19,
        top: 214,
    },
    maskGroupIcon2: {
        marginLeft: -72,
        top: 26,
        width: 144,
        height: 138,
        left: "50%",
        position: "absolute",
    },
    child: {
        width: 42,
        backgroundColor: "transparent",
    },
    text1: {
        marginLeft: -5,
        top: "50%",
        marginTop: -13,
        color: Color.colorBlack,
    },
    view: {
        height: 42,
        shadowOpacity: 1,
        elevation: 5,
        shadowRadius: 5,
        shadowOffset: {
            width: 5,
            height: 3,
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        width: 42,
    },
    counterChild: {
        width: 58,
        backgroundColor: Color.colorWhite,
    },
    text2: {
        marginLeft: -3,
        top: 7,
    },
    counter: {
        width: 58,
    },
    text3: {
        marginLeft: -6,
        top: "50%",
        marginTop: -13,
        color: Color.colorBlack,
    },
    view1: {
        width: 42,
    },
    parent: {
        marginLeft: -101,
        top: 251,
        width: 202,
        paddingHorizontal: 20,
        paddingVertical: 4,
        borderRadius: Border.br_smi,
        flexDirection: "row",
        left: "50%",
    },
    biletUlgowyParent: {
        top: 307,
        left: 67,
        borderRadius: 35,
        width: 288,
        height: 308,
    },
    backIcon: {
        width: 30,
        height: 30,
    },
    ustawienia: {
        height: 26,
        width: 322,
    //    fontFamily: FontFamily.poppinsMedium,
        fontWeight: "500",
        fontSize: FontSize.size_mid,
        color: Color.colorWhitesmoke,
        textAlign: "left",
    },
    ustawieniaKonta: {
        fontSize: 30,
        lineHeight: 77,
        width: 286,
        height: 55,
        marginTop: -22,
    },
    appName: {
        width: 278,
    },
    appNameWrapper: {
        height: 66,
        width: 278,
        justifyContent: "center",
    },
    frameWrapper: {
        marginLeft: 17,
        width: 278,
    },
    backParent: {
        top: 205,
        left: 23,
        width: 319,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
    },
    dlaCiebieI: {
        width: 322,
        color: Color.colorWhitesmoke,
    },
    bilety: {
        fontSize: 33,
        marginTop: -29,
        width: 322,
    },
    appName1: {
        width: 267,
    },
    appNameContainer: {
        width: 258,
        height: 111,
        justifyContent: "center",
    },
    frameContainer: {
        width: 255,
    },
    frameChild: {
        width: 71,
        height: 71,
    },
    vectorWrapper: {
        borderRadius: 50,
        borderStyle: "solid",
        borderColor: "rgba(255, 255, 255, 0.14)",
        borderWidth: 4,
        marginLeft: 52,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    frameParent: {
        top: 79,
        left: 32,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
    },
    frameItem: {
        borderRadius: 20,
        backgroundColor: "#d9d9d9",
        width: 185,
        height: 89,
        zIndex: 0,
    },
    garyLee: {
        lineHeight: 26,
        color: "#0c0c0c",
        width: 105,
    },
    maskGroupIcon3: {
        marginLeft: 21,
    },
    garyLeeParent: {
        top: 16,
        left: 14,
        width: 154,
        height: 56,
        zIndex: 1,
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
    },
    rectangleParent: {
        marginLeft: -93,
        top: 650,
        width: 187,
        flexDirection: "row",
        left: "50%",
        position: "absolute",
    },
    wzr: {
        borderRadius: 40,
        backgroundColor: Color.colorBlack,
        flex: 1,
        width: "100%",
        height: 896,
        overflow: "hidden",
    },
});
