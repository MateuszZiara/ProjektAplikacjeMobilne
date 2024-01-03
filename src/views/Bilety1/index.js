import * as React from "react";
import { Image } from "expo-image";
import {StyleSheet, View, Text, StatusBar, ScrollView, Button, TouchableOpacity} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {Bilety2_vip} from "../Bilety2_vip";
import Ticket from "../../Classes/Ticket";
import Singleton from "../../Classes/User";
import {Login} from "../Login";
import {UstawieniaView} from "../Ustawienia";
import {UserAvatar} from "../../components/UserAvatar";
import TicketToBuy from "../../Classes/TicketToBuy";
export function Bilety1({ navigation }) {
    return (
        <ScrollView>
        <View style={[styles.wzr, styles.wzrLayout]}>
            <View style={styles.headerEkranuPrzeksek}>
                <View style={styles.slider}>
                    <Image
                        style={[styles.image2Icon, styles.image2IconPosition]}
                        contentFit="cover"
                        source={require("./assets/image-2.png")}
                    />
                    <LinearGradient
                        style={[styles.sliderChild, styles.sliderBg]}
                        locations={[0, 0.48, 1]}
                        colors={[
                            "rgba(0, 0, 0, 0.5)",
                            "rgba(255, 255, 255, 0)",
                            "rgba(0, 0, 0, 0.5)",
                        ]}
                    />
                    <View style={styles.sliderItem} />
                    <LinearGradient
                        style={[styles.sliderInner, styles.sliderBg]}
                        locations={[0.53, 1]}
                        colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"]}
                    />
                </View>
                <View style={[styles.frameParent, styles.frameParentFlexBox]}>
                    <View style={[styles.frameWrapper, styles.frameParentFlexBox]}>
                        <View style={styles.appNameWrapper}>
                            <View style={styles.appName}>
                                <Text style={[styles.cennik, styles.cennikLayout]}>Cennik</Text>
                                <Text style={[styles.bilety, styles.textTypo]}>Bilety</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.maskGroupParent}>
                        <UserAvatar style={{zIndex: '0'}} navigation={navigation} />
                    </View>
                </View>
                <View style={styles.sliderPrzekasekParent} >
                    <View style={[styles.sliderPrzekasek, styles.sliderPosition]}>
                        <TouchableOpacity onPress={() => {{Ticket.id = 1; TicketToBuy.id = 1; TicketToBuy.name = 'VIP'; TicketToBuy.number = 1} navigation.navigate(Bilety2_vip)}}>
                        <View style={styles.parentLayout}>
                            <Text style={[styles.vip, styles.vipClr]}>VIP</Text>
                            <Image
                                style={styles.maskGroupIcon}
                                contentFit="cover"
                                source={require("./assets/mask-group.png")}
                            />
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {{Ticket.id = 2;TicketToBuy.id = 2; TicketToBuy.name = 'Ulgowy'; TicketToBuy.number = 1} navigation.navigate(Bilety2_vip)}}>
                        <View style={[styles.ulgowyParent, styles.parentLayout]}>

                            <Text style={[styles.ulgowy, styles.vipClr]}>Ulgowy</Text>
                            <Image
                                style={styles.maskGroupIcon}
                                contentFit="cover"
                                source={require("./assets/mask-group1.png")}
                            />
                        </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.sliderPrzekasek1, styles.sliderPosition]}>
                        <TouchableOpacity onPress={() => {{Ticket.id = 3;TicketToBuy.id = 3; TicketToBuy.name = 'Normalny'; TicketToBuy.number = 1 } navigation.navigate(Bilety2_vip)}}>
                        <View style={styles.parentLayout}>
                            <Image
                                style={styles.maskGroupIcon}
                                contentFit="cover"
                                source={require("./assets/mask-group2.png")}
                            />
                            <Text style={[styles.normalny, styles.vipClr]}>Normalny</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {{Ticket.id = 4; TicketToBuy.id = 4; TicketToBuy.name = 'Rodzinny'; TicketToBuy.number = 1} navigation.navigate(Bilety2_vip)}}>
                        <View style={[styles.ulgowyParent, styles.parentLayout]}>
                            <Text style={[styles.rodzinny, styles.vipClr] }>Rodzinny</Text>
                            <Image
                                style={styles.maskGroupIcon}
                                contentFit="cover"
                                source={require("./assets/mask-group3.png")}
                            />
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View
                style={[
                    styles.iphonestatusbarOgranicznik,
                    styles.iphonestatusbarPosition,
                ]}
            >
                <StatusBar
                    style={styles.iphonestatusbarPosition}
                    barStyle="light-content"
                />
            </View>
            <View style={styles.cennikParent}>
                <Text style={[styles.cennik1, styles.textTypo]}>Cennik</Text>
                <Text style={[styles.dlaCiebieI, styles.vipClr]}>
                    Dla ciebie i dla rodziny
                </Text>
            </View>
        </View>
            </ScrollView>
    );
}
/* fonts */
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
    wzrLayout: {
        width: "100%",
        overflow: "hidden",
    },
    image2IconPosition: {
        height: 184,
        left: 0,
        top: 0,
    },
    sliderBg: {
        backgroundColor: "transparent",
        position: "absolute",
    },
    frameParentFlexBox: {
        flexDirection: "row",
        alignItems: "center",
    },
    cennikLayout: {
        width: 322,
        color: 'white',
    },
    textTypo: {
        //fontFamily: FontFamily.poppinsSemiBold,
        fontWeight: "600",
        textAlign: "left",
    },
    textFlexBox: {
        display: "flex",
        alignItems: "center",
    },
    sliderPosition: {
        justifyContent: "flex-end",
        width: 175,
        left: "50%",
        top: 0,
        position: "absolute",
    },
    vipClr: {
        color: 'lightgray',
        textAlign: "left",
    },
    parentLayout: {
        height: 172,
        width: 161,
        backgroundColor: Color.colorGray_100,
        borderRadius: Border.br_11xl,
        overflow: "hidden",
    },
    iphonestatusbarPosition: {
        marginLeft: -176,
        left: "50%",
        position: "absolute",
    },
    navigationBarPosition: {
        width: 430,
        bottom: 0,
        position: "absolute",
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
        height: 186,
        left: 0,
        top: 0,
        width: 578,
        position: "absolute",
    },
    cennik: {
        fontSize: 17,
        height: 53,
        textAlign: "left",
        width: 322,
        color: 'white',
        //fontFamily: FontFamily.poppinsMedium,
        fontWeight: "500",
    },
    bilety: {
        fontSize: 33,
        marginTop: -29,
        width: 322,
        color: 'white',
        fontWeight: "600",
    },
    appName: {
        width: 267,
        height: 106,
        paddingHorizontal: 0,
        paddingVertical: 5,
        justifyContent: "center",
        overflow: "hidden",
    },
    appNameWrapper: {
        width: 258,
        height: 111,
        justifyContent: "center",
    },
    frameWrapper: {
        width: 158,
        height: 73,
        alignItems: "center",
    },
    maskGroupChild: {
        height: "100%",
        top: "0%",
        right: "0%",
        bottom: "0%",
        left: "0%",
        maxWidth: "100%",
        maxHeight: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    maskGroupItem: {
        top: 10,
        left: 8,
        width: 26,
        height: 13,
        position: "absolute",
    },
    maskGroupInner: {
        top: 16,
        left: 25,
        width: 9,
        height: 9,
        position: "absolute",
    },
    text: {
        marginTop: -0.5,
        marginLeft: 10.5,
        top: "50%",
        fontSize: FontSize.size_7xs,
        color: 'white',
        width: 3,
        height: 7,
        left: "50%",
        //fontFamily: FontFamily.poppinsSemiBold,
        fontWeight: "600",
        textAlign: "left",
        position: "absolute",
    },
    frameChild: {
        width: 71,
        height: 71,
    },
    vectorWrapper: {
        top: -4,
        left: 51,
        borderRadius: 50,
        borderStyle: "solid",
        borderColor: "rgba(255, 255, 255, 0.14)",
        borderWidth: 4,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
    },
    maskGroupParent: {
        marginLeft: 85,
    },
    frameParent: {
        top: 58,
        left: 29,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
    },
    vip: {
        marginLeft: -14.5,
        //fontFamily: FontFamily.poppinsBold,
        fontWeight: "700",
        fontSize: FontSize.size_lg,
        top: 119,
        color: 'lightgray',
        left: "50%",
        position: "absolute",
    },
    maskGroupIcon: {
        marginLeft: -35.5,
        top: 23,
        width: 73,
        left: "50%",
        height: 73,
        position: "absolute",
    },
    ulgowy: {
        marginLeft: -34.5,
       // fontFamily: FontFamily.poppinsBold,
        fontWeight: "700",
        fontSize: FontSize.size_lg,
        top: 119,
        left: "50%",
        color: 'lightgray',
        position: "absolute",
    },
    ulgowyParent: {
        marginTop: 20,
    },
    sliderPrzekasek: {
        marginLeft: -180,
    },
    normalny: {
        marginLeft: -46.5,
        //fontFamily: FontFamily.poppinsBold,
        fontWeight: "700",
        fontSize: FontSize.size_lg,
        top: 119,
        color: 'lightgray',
        left: "55%",
        position: "absolute",
    },
    rodzinny: {
        marginLeft: -42.5,
       // fontFamily: FontFamily.poppinsBold,
        fontWeight: "700",
        fontSize: FontSize.size_lg,
        top: 119,
        color: Color.colorLightgray,
        left: "53%",
        position: "absolute",
    },
    sliderPrzekasek1: {
        marginLeft: 5,
    },
    sliderPrzekasekParent: {
        marginLeft: -265,
        top: 293,
        width: 360,
        height: 364,
        left: "50%",
        position: "absolute",
    },
    headerEkranuPrzeksek: {
        height: 657,
        width: 578,
        position: "absolute",
    },
    iphonestatusbarOgranicznik: {
        top: 5,
        width: 352,
        height: 32,
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
        position: "absolute",
    },
    line: {
        borderRadius: 575,
        backgroundColor: 'white',
        width: 169,
        height: 5,
    },
    iphoneIndicator: {
        paddingHorizontal: 101,
        paddingVertical: 48,
        height: 32,
        justifyContent: "center",
        alignItems: "center",
        left: 0,
    },
    navigationBarChild: {
        top: 20,
        left: 233,
        borderRadius: 13,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        width: 58,
        height: 59,
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
    cennik1: {
        fontSize: 23,
        color: "#f5f5f5",
    },
    dlaCiebieI: {
        fontSize: 16,
        width: 285,
        display: "flex",
        alignItems: "center",
        color: Color.colorLightgray,
       // fontFamily: FontFamily.poppinsMedium,
        fontWeight: "500",
    },
    cennikParent: {
        marginLeft: -167,
        top: 213,
        left: "50%",
        position: "absolute",
    },
    wzr: {
        backgroundColor: "#000",
        flex: 1,
        height: 750,
        overflow: "hidden",
    },
});


