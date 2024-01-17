import {StyleSheet} from "react-native";

export const FontSize = {
    size_lg: 18,
    size_mid: 17,
};
/* Colors */
export const Color = {
    colorGray_100: "rgba(255, 255, 255, 0.1)",
    colorWhite: "#fff",
    colorLightgray: "#cbcbcb",
    colorWhitesmoke: "#ececec",
};
/* Paddings */
export const Padding = {
    p_8xs: 5,
};
/* border radiuses */
export const Border = {
    br_11xl: 30,
    br_16xl: 35,
};


export const styles2 = StyleSheet.create({
    image2IconPosition: {
        height: 184,
        left: 0,
        top: 0,
        position: "absolute",
    },
    parentFlexBox: {
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
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
    garyLeeTypo: {
        height: 53,
        textAlign: "left",
        fontFamily: 'poppins500',
        fontWeight: "500",
        fontSize: FontSize.size_mid,
    },
    przekskiTypo: {
        fontFamily: 'poppins600',
        fontWeight: "600",
        textAlign: "left",
        color: Color.colorWhitesmoke,
    },
    frameLayout: {
        width: 55,
        height: 55,
    },
    parentBg: {
        backgroundColor: Color.colorGray_100,
        overflow: "hidden",
    },
    zTypo: {
        color: Color.colorLightgray,
        fontFamily: 'poppins600',
        fontWeight: "700",
        fontSize: FontSize.size_lg,
        left: "50%",
        textAlign: "left",
        position: "absolute",
    },
    parentPosition: {
        left: "50%",
        position: "absolute",
    },
    childPosition: {
        borderRadius: Border.br_sm,
        height: 42,
        left: 0,
        top: 0,
        position: "absolute",
    },
    textTypo: {
        color: Color.colorBlack,
        fontFamily: 'poppins600',
        fontWeight: "700",
        fontSize: FontSize.size_lg,
        left: "50%",
        textAlign: "left",
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
    image2Icon: {
        width: 434,
    },
    sliderChild: {
        backgroundColor: "transparent",
        width: 578,
        height: 184,
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
        left: 0,
        top: 0,
        height: 186,
        width: 578,
        position: "absolute",
    },
    idealneNaSeans: {
        width: 322,
        color: Color.colorWhitesmoke,
        height: 53,
    },
    przekski: {
        fontSize: 33,
        marginTop: -29,
        width: 322,
    },
    appName: {
        width: 267,
    },
    appNameWrapper: {
        width: 258,
        height: 111,
        justifyContent: "center",
    },
    frameWrapper: {
        width: 158,
    },
    frameChild: {
        height: 55,
    },
    vectorWrapper: {
        top: -4,
        left: -4,
        borderRadius: 50,
        borderStyle: "solid",
        borderColor: "rgba(255, 255, 255, 0.14)",
        borderWidth: 4,
        justifyContent: "center",
    },
    frameContainer: {
        marginLeft: 82,
        height: 55,
    },
    frameParent: {
        top: 58,
        left: 29,
        justifyContent: "center",
    },
    headerEkranuPrzeksek: {
        top: 21,
        left: -3,
        height: 186,
        width: 578,
        position: "absolute",
    },
    mayPopcorn: {
        marginLeft: -64,
        top: 187,
    },
    z: {
        marginLeft: -19,
        top: 214,
    },
    closeUpDeliciousSaltedPopcIcon: {
        marginLeft: -58,
        width: 117,
        height: 170,
        top: 7,
    },
    child: {
        width: 42,
        backgroundColor: "transparent",
    },
    text: {
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
        backgroundColor: "#fff",
        width: 58,
    },
    text1: {
        marginLeft: -3,
        top: 7,
    },
    counter: {
        width: 58,
    },
    text2: {
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
        borderRadius: 13,
        width: 202,
        paddingHorizontal: 20,
        paddingVertical: 4,
        backgroundColor: Color.colorGray_100,
        overflow: "hidden",
        flexDirection: "row",
        left: "50%",
    },
    parentLayout: {
        height: 245,
        width: 250,
        backgroundColor: Color.colorGray_100,
        borderRadius: Border.br_16xl,
        overflow: "hidden",
    },
    mayPopcornParent: {
        top: 300,
        left: 55,
        borderRadius: 35,
        width: 288,
        height: 308,
        position: "absolute",
    },
    backIcon: {
        width: 30,
        height: 30,
    },
    ustawienia: {
        height: 26,
        width: 322,
        textAlign: "left",
        fontFamily: 'poppins500',
        fontWeight: "500",
        fontSize: FontSize.size_mid,
        color: Color.colorWhitesmoke,
    },
    ustawieniaKonta: {
        fontSize: 30,
        lineHeight: 77,
        width: 286,
        marginTop: -22,
        height: 55,
    },
    appName1: {
        width: 278,
    },
    appNameContainer: {
        height: 66,
        width: 278,
        justifyContent: "center",
    },
    frameView: {
        marginLeft: 17,
        width: 278,
    },
    backParent: {
        top: 205,
        left: 23,
        width: 319,
        justifyContent: "center",
    },
    frameItem: {
        borderRadius: 20,
        height: 89,
        zIndex: 0,
        width: 185,
        backgroundColor: "transparent",
    },
    garyLee: {
        lineHeight: 26,
        color: "#0c0c0c",
        width: 105,
    },
    maskGroupIcon: {
        width: 35,
        height: 35,
        marginLeft: 21,
    },
    garyLeeParent: {
        top: 16,
        left: 14,
        width: 154,
        height: 56,
        zIndex: 1,
    },
    rectangleParent: {
        marginLeft: -92,
        top: 640,
        width: 185,
        flexDirection: "row",
        left: "50%",
    },
    wzr: {
        backgroundColor: Color.colorBlack,
        flex: 1,
        width: "100%",
        height: 896,
        overflow: "hidden",
    },
});