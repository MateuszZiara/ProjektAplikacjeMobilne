import * as React from "react";
import {Text, StyleSheet, View, TouchableOpacity, ScrollView, TouchableWithoutFeedback} from "react-native";
import { Image } from "expo-image";
import { Border, FontSize, FontFamily, Color } from "./styles.js";
import { styles } from "./styles.js";
import Singleton from "../../Classes/User";
import {PrzekaskiView} from "../Przekaski";
import {Home} from "../Home";
import {SzczegolyKonta} from "../SzczegolyKonta";

export function UstawieniaView({ navigation }) {
    {
        return (
                <ScrollView style={[styles.wzr]}>
                    <View style={styles.frameParent}>
                        <View style={styles.titleParent}>
                            <Text style={{fontFamily: 'Inter_900Black', fontSize: 40}}>Edytuj Profil</Text>
                            <View style={styles.frameGroup}>
                                <View style={[styles.vectorWrapper, styles.wrapperFlexBox]}>
                                    <Image
                                        style={styles.frameChild}
                                        contentFit="cover"
                                        source={require("./assets/ellipse-19.png")}
                                    />
                                </View>
                                <View
                                    style={[
                                        styles.agnieszkaKowalParent,
                                        styles.vectorWrapperPosition,
                                    ]}
                                >
                                    <Text style={styles.agnieszkaKowal}>Agnieszka Kowal</Text>
                                    <View
                                        style={[
                                            styles.agnieszkakowalgmailcomWrapper,
                                            styles.wrapperFlexBox,
                                        ]}
                                    >
                                        <Text style={styles.agnieszkakowalgmailcom}>
                                            agnieszkakowal@gmail.com
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
                                    <Image
                                        style={[styles.frameItem, styles.frameItemLayout]}
                                        contentFit="cover"
                                        source={require('./assets/ellipse-78.png')}
                                    />

                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress={() => navigation.navigate('SzczegolyKonta')}>

                                    <Image
                                        style={[styles.pencilIcon, styles.frameItemLayout]}
                                        contentFit="cover"
                                        source={require('./assets/pencil.png')}
                                    />
                            </TouchableWithoutFeedback>


                        </View>
                        <TouchableOpacity style={styles.rectangleParent}
                                          onPress={() => navigation.navigate(PrzekaskiView)}>
                            <View style={[styles.frameInner, styles.frameLayout]}/>
                            <View style={[styles.adjustParent, styles.parentGroupPosition]}>
                                <Image
                                    style={styles.adjustIcon}
                                    contentFit="cover"
                                    source={require("./assets/adjust.png")}
                                />
                                <Text style={[styles.garyLee, styles.garyTypo]}>Preferencje</Text>
                            </View>
                        </TouchableOpacity>


                        <View style={styles.rectangleParent}>
                            <View style={[styles.frameInner, styles.frameLayout]}/>
                            <View style={[styles.adjustParent, styles.parentGroupPosition]}>
                                <Image
                                    style={styles.adjustIcon}
                                    contentFit="cover"
                                    source={require("./assets/notification.png")}
                                />
                                <Text style={[styles.garyLee, styles.garyTypo]}>
                                    Powiadomienia
                                </Text>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.rectangleParent}
                                          onPress={() => navigation.navigate(SzczegolyKonta)}>
                                <View style={[styles.frameInner, styles.frameLayout]}/>
                                <View style={[styles.adjustParent, styles.parentGroupPosition]}>
                                    <Image
                                        style={styles.maskGroupIcon}
                                        contentFit="cover"
                                        source={require("./assets/mask-group.png")}
                                    />
                                    <Text style={[styles.garyLee, styles.garyTypo]}>
                                        Ustawienia Konta </Text>
                                </View>

                        </TouchableOpacity>
                        <View style={styles.rectangleParent}>
                            <View style={[styles.frameInner, styles.frameLayout]}/>
                            <View style={[styles.maskGroupGroup, styles.parentGroupPosition]}>
                                <Image
                                    style={styles.adjustIcon}
                                    contentFit="cover"
                                    source={require("./assets/mask-group1.png")}
                                />
                                <Text style={styles.garyLee3}>Historia Zakupów</Text>
                            </View>
                        </View>
                        <View style={styles.rectangleParent1}>
                            <View style={[styles.frameInner, styles.frameLayout]}/>
                            <View style={[styles.maskGroupGroup, styles.parentGroupPosition]}>
                                <Image
                                    style={styles.helpIcon}
                                    contentFit="cover"
                                    source={require("./assets/help.png")}
                                />
                                <Text style={styles.garyLee3}>Centrum Pomocy</Text>
                            </View>
                        </View>
                        <View style={styles.rectangleParent}>
                            <View style={[styles.frameChild4, styles.frameLayout]}/>
                            <View style={[styles.logoutParent, styles.parentGroupPosition]}>
                                <Image
                                    style={styles.adjustIcon}
                                    contentFit="cover"
                                    source={require("./assets/logout.png")}
                                />
                                <Text style={[styles.garyLee5, styles.garyTypo]}>Wyloguj</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
        );
    }
}