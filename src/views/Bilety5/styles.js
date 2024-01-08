import {StyleSheet} from "react-native";
/* fonts */
export const FontFamily = {
    poppinsSemiBold: "Poppins-SemiBold",
    poppinsMedium: "Poppins-Medium",
};
/* font sizes */
export const FontSize = {
    size_mid: 17,
    size_lgi: 19,
    size_3xs: 10,
    size_xs: 12,
};
/* Colors */
export const Color = {
    colorWhitesmoke: "#ececec",
    colorWhite: "#fff",
    colorLightgray: "#cbcbcb",
    colorSilver: "rgba(196, 196, 196, 0.1)",
};
/* Paddings */
export const Padding = {
    p_8xs: 5,
};
/* border radiuses */
export const Border = {
    br_xl: 20,
};

export const styles = StyleSheet.create({
    image2IconPosition: {
        height: 184,
        left: 0,
        top: 0,
    },
    sliderBg: {
        backgroundColor: "transparent",
        position: "absolute",
    },
    parentFrameFlexBox: {
        alignItems: "center",
        flexDirection: "row",
    },
    garyFlexBox: {
        textAlign: "left",
        height: 26,
    },
    dTypo: {
        marginLeft: 10,
        height: 17,
        lineHeight: 15,
        fontSize: FontSize.size_3xs,
        display: "flex",
        textAlign: "center",
        //fontFamily: FontFamily.poppinsSemiBold,
        fontWeight: "600",
        color: Color.colorLightgray,
        justifyContent: "center",
        alignItems: "center",
    },
    textTypo: {
        color: Color.colorWhite,
        lineHeight: 29,
        fontSize: FontSize.size_lgi,
        //fontFamily: FontFamily.poppinsSemiBold,
        fontWeight: "600",
    },
    frameWrapperFlexBox: {
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
    biletyLayout: {
        width: 322,
        color: Color.colorWhitesmoke,
        textAlign: "left",
    },
    image2Icon: {
        width: 434,
        position: "absolute",
    },
    sliderChild: {
        height: 184,
        left: 0,
        top: 0,
        width: 578,
        backgroundColor: "transparent",
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
    },
    slider: {
        left: 0,
        top: 0,
        height: 186,
        width: 578,
        position: "absolute",
    },
    headerEkranuPrzeksek: {
        left: -3,
        height: 186,
        width: 578,
        top: 5,
        position: "absolute",
    },
    frameChild: {
        borderRadius: Border.br_xl,
        backgroundColor: Color.colorSilver,
        width: 370,
        height: 89,
        zIndex: 0,
    },
    garyLee: {
        fontSize: FontSize.size_xs,
        lineHeight: 18,
        width: 118,
        height: 26,
        color: Color.colorLightgray,
        //fontFamily: FontFamily.poppinsMedium,
        fontWeight: "500",
        textAlign: "left",
    },
    d: {
        width: 18,
    },
    napisy: {
        width: 42,
    },
    garyLeeParent: {
        justifyContent: "center",
        flexDirection: "row",
    },
    garyLee1: {
        width: 182,
        marginTop: -5,
        height: 26,
        textAlign: "left",
    },
    frameGroup: {
        width: 202,
        justifyContent: "center",
    },
    text: {
        width: 54,
        height: 41,
        marginLeft: 83,
        display: "flex",
        textAlign: "center",
        lineHeight: 29,
        fontSize: FontSize.size_lgi,
        justifyContent: "center",
        alignItems: "center",
    },
    frameParent: {
        left: 15,
        zIndex: 1,
        top: 21,
        alignItems: "center",
        position: "absolute",
    },
    frameView: {
        justifyContent: "center",
    },
    rectangleGroup: {
        zIndex: 2,
        marginTop: 20,
    },
    rectangleContainer: {
        zIndex: 3,
        marginTop: 20,
    },
    dubbing: {
        width: 46,
    },
    rectangleParent1: {
        zIndex: 4,
        marginTop: 20,
    },
    rectangleParent: {
        top: 300,
        left: 22,
        height: 406,
        position: "absolute",
    },
    siedzeniaChild: {
        top: 211,
        left: 2,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        width: 412,
        height: 63,
        position: "absolute",
    },
    backIcon: {
        width: 30,
        height: 30,
    },
    ustawienia: {
        fontSize: FontSize.size_mid,
        width: 322,
        //fontFamily: FontFamily.poppinsMedium,
        fontWeight: "500",
        height: 26,
    },
    ustawieniaKonta: {
        fontSize: 30,
        lineHeight: 77,
        width: 286,
        marginTop: -22,
        height: 55,
        color: Color.colorWhitesmoke,
        //fontFamily: FontFamily.poppinsSemiBold,
        fontWeight: "600",
        textAlign: "left",
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
        position: "absolute",
    },
    dlaCiebieI: {
        height: 53,
        fontSize: FontSize.size_mid,
        width: 322,
        //fontFamily: FontFamily.poppinsMedium,
        fontWeight: "500",
    },
    bilety: {
        fontSize: 33,
        marginTop: -29,
        width: 322,
        //fontFamily: FontFamily.poppinsSemiBold,
        fontWeight: "600",
    },
    appName1: {
        width: 267,
    },
    appNameContainer: {
        width: 258,
        height: 111,
        justifyContent: "center",
    },
    frameWrapper1: {
        width: 255,
    },
    ellipseIcon: {
        width: 55,
        height: 55,
    },
    vectorWrapper: {
        borderRadius: 50,
        borderStyle: "solid",
        borderColor: "rgba(255, 255, 255, 0.14)",
        borderWidth: 4,
        marginLeft: 52,
        justifyContent: "center",
    },
    frameParent5: {
        top: 59,
        left: 32,
        justifyContent: "center",
        position: "absolute",
    },
    siedzenia: {
        backgroundColor: "#000",
        flex: 1,
        width: "100%",
        height: 896,
        overflow: "hidden",
    },
});