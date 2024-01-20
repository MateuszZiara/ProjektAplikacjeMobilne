import * as React from "react";
import {Text, StyleSheet, View, TouchableOpacity, ScrollView, TouchableWithoutFeedback, StatusBar} from "react-native";
import { Image } from "expo-image";
import { Border, FontSize, FontFamily, Color } from "./styles.js";
import { styles } from "./styles.js";
import Singleton from "../../Classes/User";
import {PrzekaskiView} from "../Przekaski";
import {Home} from "../Home";
import {SzczegolyKonta} from "../SzczegolyKonta";
import {LoginView} from "../LoginView";
import {Login} from "../Login";
import User from "../../Classes/User"
import Cart from "../../Classes/Cart"
import {UserAvatar} from "../../components/UserAvatar";
export function UstawieniaView({ navigation }) {

    {
        return (
                <ScrollView>
                    <View style={styles.frameParent}>
                        <View style={styles.titleParent}>
                            <Text style={{fontFamily: 'Inter_900Black', fontSize: 18, color: 'white', textAlign: "center", paddingTop: 30}}>Edytuj Profil</Text>
                            <View style={styles.frameGroup}>



                                <View
                                    style={[
                                        styles.agnieszkaKowalParent,
                                        styles.vectorWrapperPosition,
                                    ]}
                                >
                                    <Text style={styles.agnieszkaKowal}>{Singleton.name}</Text>
                                    <View
                                        style={[
                                            styles.agnieszkakowalgmailcomWrapper,
                                            styles.wrapperFlexBox,
                                        ]}
                                    >
                                        <Text style={styles.agnieszkakowalgmailcom}>
                                            {Singleton.email}
                                        </Text>
                                    </View>
                                    <View style={styles.gb}>
                                        <UserAvatar  navigation={navigation} />
                                    </View>
                                </View>
                            </View>

                            <TouchableWithoutFeedback onPress={() => navigation.navigate('SzczegolyKonta')}>
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


                        <TouchableOpacity style={styles.rectangleParent}  onPress={() => navigation.navigate(SzczegolyKonta)}>
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
                        </TouchableOpacity>

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

                        <TouchableOpacity style={styles.rectangleParent} onPress={() => navigation.navigate()}>
                            <View style={[styles.frameInner, styles.frameLayout]}/>
                            <View style={[styles.maskGroupGroup, styles.parentGroupPosition]}>
                                <Image
                                    style={styles.adjustIcon}
                                    contentFit="cover"
                                    source={require("./assets/mask-group1.png")}
                                />
                                <Text style={styles.garyLee3}>Historia Zakupów</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.rectangleParent1} onPress={() => navigation.navigate()}>
                            <View style={[styles.frameInner, styles.frameLayout]}/>
                            <View style={[styles.maskGroupGroup, styles.parentGroupPosition]}>
                                <Image
                                    style={styles.helpIcon}
                                    contentFit="cover"
                                    source={require("./assets/help.png")}
                                />
                                <Text style={styles.garyLee3}>Centrum Pomocy</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.rectangleParent} onPress={() =>{
                            User.id = 0;
                            User.email = null;
                            User.name = null;
                            Cart.array = [];
                            navigation.navigate(Login);
                        }}>
                            <View style={[styles.frameInner, styles.frameLayout]}/>
                            <View style={[styles.maskGroupGroup, styles.parentGroupPosition]}>
                                <Image
                                    style={styles.maskGroupIcon}
                                    contentFit="cover"
                                    source={require("./assets/logout.png")}
                                />
                                <Text style={styles.garyLee3}>Wyloguj</Text>
                            </View>
                        </TouchableOpacity>

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
                </ScrollView>
        );
    }
}