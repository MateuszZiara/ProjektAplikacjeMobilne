import {StyleSheet} from "react-native";
/* fonts */
export const FontFamily = {
    poppinsMedium: "poppins500",
    poppinsSemiBold: "poppins600",
};
/* font sizes */
export const FontSize = {
    size_mid: 17,
    size_6xl: 25,
    size_xl: 20,
};
/* Colors */
export const Color = {
    colorBlack: "#000",
    colorWhite: "#fff",
    colorGray_100: "#0c0c0c",
    colorGainsboro: "#d9d9d9",
    colorWhitesmoke: "#ececec",
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
    sliderLayout: {
        height: 186,
        width: 578,
    },
    parentPosition: {
        left: 0,
        position: "absolute",
    },
    image2IconPosition: {
        height: 184,
        left: 0,
        top: 0,
        position: "absolute",
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
    ustawieniaTypo: {
        textAlign: "left",
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: "500",
    },
    biletyTypo: {
        fontFamily: FontFamily.poppinsSemiBold,
        fontWeight: "600",
        textAlign: "left",
        color: Color.colorWhitesmoke,
    },
    bilet1Layout: {
        height: 38,
        width: 119,
        alignItems: "flex-end",
        display: "flex",
        letterSpacing: -0.7,
        fontSize: FontSize.size_xl,
    },
    bilet1Typo: {
        color: Color.colorWhite,
        fontFamily: FontFamily.poppinsSemiBold,
        fontWeight: "600",
        textAlign: "left",
    },
    frameLayout: {
        height: 89,
        width: 185,
        borderRadius: Border.br_xl,
    },
    garyPosition: {
        top: 16,
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
    },
    garyTypo: {
        color: Color.colorGray_100,
        lineHeight: 26,
        textAlign: "left",
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: "500",
        fontSize: FontSize.size_mid,
    },
    maskGroupLayout: {
        height: 35,
        width: 35,
    },
    frameParentPosition: {
        height: 340,
        top: 308,
        left: 18,
        position: "absolute",
    },
    dodajParentPosition: {
        left: "50%",
        position: "absolute",
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
        top: 0,
        height: 186,
        width: 578,
    },
    headerEkranuPrzeksek: {
        top: 21,
        left: -3,
        position: "absolute",
    },
    backIcon: {
        width: 30,
        height: 30,
    },
    ustawienia: {
        height: 26,
        width: 322,
        color: Color.colorWhitesmoke,
        fontSize: FontSize.size_mid,
        textAlign: "left",
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: "500",
    },
    ustawieniaKonta: {
        fontSize: 30,
        lineHeight: 77,
        width: 286,
        marginTop: -22,
        height: 55,
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
    nazwaFilmu: {
        color: Color.colorGainsboro,
        textAlign: "left",
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: "500",
        width: 119,
        alignItems: "flex-end",
        display: "flex",
        letterSpacing: -0.7,
        fontSize: FontSize.size_xl,
    },
    americanPsycho: {
        fontSize: FontSize.size_6xl,
        letterSpacing: -0.9,
        marginLeft: 10,
    },
    nazwaFilmuParent: {
        flexDirection: "row",
    },
    bilet1: {
        height: 38,
        width: 119,
        alignItems: "flex-end",
        display: "flex",
        letterSpacing: -0.7,
        fontSize: FontSize.size_xl,
    },
    bilet1Wrapper: {
        flexDirection: "row",
        top: 0,
    },
    rzdParent: {
        top: 36,
        flexDirection: "row",
    },
    siedzenieParent: {
        top: 72,
        flexDirection: "row",
    },
    frameContainer: {
        width: 145,
        height: 110,
    },
    groupView: {
        width: 143,
        marginLeft: 50,
        height: 110,
    },
    groupParent: {
        marginTop: 20,
        flexDirection: "row",
    },
    potwierdzenieWyboruChild: {
        top: 649,
        left: -45,
        width: 568,
        height: 127,
        position: "absolute",
        backgroundColor: Color.colorBlack,
    },
    dlaCiebieI: {
        height: 53,
        width: 322,
        color: Color.colorWhitesmoke,
        fontSize: FontSize.size_mid,
        textAlign: "left",
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: "500",
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
    frameWrapper1: {
        width: 255,
    },
    frameChild: {
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
        alignItems: "center",
        flexDirection: "row",
    },
    frameParent3: {
        top: 79,
        left: 32,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
    },
    frameItem: {
        backgroundColor: Color.colorGainsboro,
        zIndex: 0,
    },
    frameInner: {
        zIndex: 1,
        marginLeft: 10,
        backgroundColor: "transparent",
    },
    garyLee: {
        width: 105,
        height: 53,
    },
    maskGroupIcon: {
        marginLeft: 21,
    },
    garyLeeParent: {
        left: 14,
        width: 154,
        height: 56,
        zIndex: 2,
    },
    garyLee1: {
        width: 108,
        height: 57,
    },
    maskGroupIcon1: {
        marginLeft: 13,
    },
    garyLeeGroup: {
        left: 211,
        width: 147,
        zIndex: 3,
    },
    rectangleParent: {
        top: 658,
        width: 380,
        left: 18,
        flexDirection: "row",
        position: "absolute",
    },
    potwierdzenieWyboruItem: {
        alignItems: "center",
    },
    potwierdzenieWyboruInner: {
        marginLeft: -190,
        top: 759,
        borderRadius: 11,
        height: 49,
        width: 380,
        backgroundColor: "transparent",
    },
    dodaj: {
        width: 231,
        lineHeight: 26,
        height: 53,
        color: Color.colorWhite,
        display: "flex",
        textAlign: "left",
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: "500",
        fontSize: FontSize.size_mid,
        alignItems: "center",
    },
    maskGroupIcon2: {
        marginLeft: -9,
    },
    dodajParent: {
        marginLeft: -126,
        top: 773,
        width: 257,
        height: 21,
        alignItems: "center",
        flexDirection: "row",
    },
    potwierdzenieWyboru: {
        flex: 1,
        width: "100%",
        height: 896,
        overflow: "hidden",
        backgroundColor: Color.colorBlack,
    },
});