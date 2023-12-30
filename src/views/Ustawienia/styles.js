import {StyleSheet} from "react-native";

export const FontSize = {
    size_11xl: 30,
    size_mini: 15,
    size_lg: 18,
};
/* Colors */
export const Color = {
    colorGray_100: "rgba(125, 125, 125, 0.33)",
    colorGray_200: "rgba(255, 255, 255, 0.1)",
    colorGray_300: "rgba(255, 255, 255, 0.15)",
    colorWhite: "#fff",
    colorWhitesmoke_100: "#ececec",
    colorLightgray: "#cbcbcb",
};
/* Paddings */
export const Padding = {
    p_7xs: 6,
};
/* border radiuses */
export const Border = {
    br_11xl: 30,
    br_xl: 20,
    br_mid: 17,
    br_16xl: 35,
    br_7xs: 6,
};

export const styles = StyleSheet.create({
    iphonestatusbarPosition: {
        marginLeft: -176,
        left: "50%",
        position: "absolute",
    },
    signalParentFlexBox: {
        flexDirection: "row",
        alignItems: "center",
        fontFamily:  " 'Poppins', sans-serif"
    },
    wrapperFlexBox: {
        justifyContent: "center",
        alignItems: "center",
    },
    vectorWrapperPosition: {
        right: "0%",
        position: "absolute",
    },
    frameItemLayout: {
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    frameLayout: {
        zIndex: 0,
        height: 89,
        borderRadius: Border.br_xl,
        width: 370,
    },
    parentGroupPosition: {
        zIndex: 1,
        left: 31,
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
    },
    garyTypo: {
        marginLeft: 21,
        height: 26,
        width: 182,
        lineHeight: 26,
        fontSize: FontSize.size_mid,
        fontFamily:  'Poppins, sans-serif',
        fontWeight: "500",
        textAlign: "left",
    },
    navigationBarLayout: {
        width: 430,
        position: "absolute",
    },
    iconLayout: {
        height: 35,
        width: 35,
    },
    text: {
        fontSize: 19,
        fontFamily:  'Poppins, sans-serif',
        display: "flex",
        width: 43,
        height: 20,
        textAlign: "left",
        color: Color.colorWhite,
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
    },
    iphonestatusbar: {
        top: 0,
        backgroundColor: "rgba(0, 0, 0, 0)",
        alignItems: "center",
        left: "50%",
        marginLeft: -176,
        position: "absolute",
    },
    iphonestatusbarOgranicznik: {
        top: 5,
        width: 352,
        height: 32,
        left: "50%",
    },
    title: {
        height: "10.93%",
        width: "55.68%",
        top: "8.28%",
        left: "22.7%",
        textAlign: "center",
        fontFamily:  'Poppins, sans-serif',
        fontWeight: "500",
        lineHeight: 27,
        fontSize: FontSize.size_lg,
        color: Color.colorWhite,
        position: "absolute",
    },
    frameChild: {
        width: 125,
        height: 125,
    },
    vectorWrapper: {
        height: "63.76%",
        width: "100.91%",
        top: "-3.42%",
        bottom: "39.66%",
        left: "-0.91%",
        borderRadius: 50,
        borderColor: "rgba(255, 255, 255, 0.14)",
        borderWidth: 6,
        borderStyle: "solid",
        justifyContent: "center",
        flexDirection: "row",
        right: "0%",
        position: "absolute",
    },
    agnieszkaKowal: {
        fontWeight: "500",
        fontFamily:  'Poppins, sans-serif',
        color: "#ececec",
        width: 260,
        height: 28,
        textAlign: "center",
        lineHeight: 27,
        fontSize: FontSize.size_lg,
    },
    agnieszkakowalgmailcom: {
        fontSize: FontSize.label113pt_size,
        lineHeight: 20,
        fontFamily:  'Poppins, sans-serif',
        textAlign: "center",
        color: Color.colorWhite,
    },
    agnieszkakowalgmailcomWrapper: {
        borderColor: "rgba(236, 236, 236, 0.47)",
        borderTopWidth: 1,
        width: 40,
        marginTop: 2,
        borderStyle: "solid",
        justifyContent: "center",
        flexDirection: "row",
        height: 32,
    },
    agnieszkaKowalParent: {
        height: "29.98%",
        top: "70.02%",
        bottom: "0%",
        left: "0%",
        alignItems: "center",
        width: "100%",
    },
    frameGroup: {
        height: "58.75%",
        width: "29.73%",
        top: "25.08%",
        right: "35.14%",
        bottom: "16.17%",
        left: "35.14%",
        position: "absolute",
    },
    frameItem: {
        height: "13.38%",
        width: "10.81%",
        top: "49.5%",
        right: "34.59%",
        bottom: "37.12%",
        left: "54.59%",
    },
    pencilIcon: {
        height: "10.03%",
        width: "8.11%",
        top: "51.17%",
        right: "35.95%",
        bottom: "38.8%",
        left: "55.95%",
    },
    titleParent: {
        borderRadius: 34,
        height: 299,
        backgroundColor: "rgba(196, 196, 196, 0.10)",
        width: 370,
        overflow: "hidden",
    },
    frameInner: {
        backgroundColor: "rgba(196, 196, 196, 0.10)"
    },
    adjustIcon: {
        height: 42,
        width: 42,
    },
    garyLee: {
        color: Color.colorWhite,
    },
    adjustParent: {
        top: 21,
    },
    rectangleParent: {
        marginTop: 13,
    },
    maskGroupIcon: {
        width: 42,
        height: 42,
    },
    garyLee3: {
        marginLeft: 18,
        height: 26,
        width: 182,
        lineHeight: 26,
        fontSize: FontSize.size_mid,
        //fontFamily: FontFamily.poppinsMedium,
        fontWeight: "500",
        textAlign: "left",
        color: Color.colorWhite,
    },
    maskGroupGroup: {
        top: 14,
    },
    helpIcon: {
        height: 62,
        width: 46,
    },
    rectangleParent1: {
        paddingRight: 5,
        marginTop: 13,
    },
    frameChild4: {
        backgroundColor: Color.colorWhite,
    },
    garyLee5: {
        color: "#0c0c0c",
    },
    logoutParent: {
        top: 22,
    },
    frameParent: {
        height: 990,
        backgroundColor: "#000",
        flex: 1,
        overflow: "hidden",
        width: "100%",
        paddingLeft: 10
    },
    wzrInner: {
        top: 37,
        left: 29,
        height: 712,
        width: 370,
        position: "absolute",
    },
    popcorninactiveIcon: {
        marginLeft: 58,
    },
    homeinactiveParent: {
        top: 18,
        width: 368,
        height: 58,
        left: 31,
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
        bottom: 0,
        left: 0,
        paddingHorizontal: 101,
        paddingVertical: 48,
        justifyContent: "center",
        alignItems: "center",
        height: 32,
    },
    navigationBar: {
        marginLeft: -207,
        bottom: -10,
        borderBottomRightRadius: Border.br_11xl,
        borderBottomLeftRadius: Border.br_11xl,
        backgroundColor: "#141414",
        height: 142,
        left: "50%",
        overflow: "hidden",
    },
   /* FontFamily: {
        poppinsMedium: "Poppins-Medium",
        label113pt: "PlusJakartaSans-Regular",
        poppinsSemiBold: "Poppins-SemiBold",
        berlinSansFB: "Berlin Sans FB",
    },
    FontSize: {
        size_mid: 17,
        label113pt_size: 13,
        size_lg: 18,
    },
 Color: {
        colorWhite: "#fff",
        colorSilver: "rgba(196, 196, 196, 0.1)",
    },
Border:{
        br_11xl: 30,
        br_xl: 20,
    }*/

});