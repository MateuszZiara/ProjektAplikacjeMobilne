import * as React from "react";
import {Image} from "expo-image";
import {Text, TouchableOpacity, View} from "react-native";
import {styles} from "./styles"
import {LinearGradient} from "expo-linear-gradient";
import {UserAvatar} from "../../components/UserAvatar";
import {Bilety3} from "../Bilety3";
import {Bilety7} from "../Bilety7";
import {NavigationContainer} from "@react-navigation/native";
import TabNav from "../../navigation/Tab";

export function Bilety5({navigation}) {

    //TODO zostawiam tu stałe, flatlista do zrobienia
//foreach movie w danym dniu z poprzedniego okna
    const movieitem = ({item}) => (
        <TouchableOpacity> {/* dodac onPress */}
            <View style={styles.frameChild}/>
            <View style={[styles.frameParent, styles.parentFrameFlexBox]}>
                <View style={styles.frameGroup}>
                    <View style={styles.garyLeeParent}>
                        <Text style={[styles.garyLee, styles.garyFlexBox]}>
                            {item.name}
                        </Text>
                        <Text style={[styles.d, styles.dTypo]}></Text>
                        <Text style={[styles.napisy, styles.dTypo]}>{item.type}</Text>
                    </View>
                    <Text style={[styles.garyLee1, styles.textTypo]}>Sala {item.place}</Text>
                </View>
                <Text style={[styles.text, styles.textTypo]}>{item.time}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <NavigationContainer independent={true}>
            <View style={styles.siedzenia}>
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
                        <View style={styles.sliderItem}/>
                        <LinearGradient
                            style={[styles.sliderInner, styles.sliderBg]}
                            locations={[0.53, 1]}
                            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"]}
                        />
                    </View>
                </View>
                <View style={styles.rectangleParent}>
                    <TouchableOpacity onPress={() => navigation.navigate(Bilety7)}>
                        <Text style={{borderWidth: 4, borderColor: '#ff0202', zIndex: 0}}> eeee</Text>
                    </TouchableOpacity>
                    {/* tutaj elementy z funkcji*/}
                    <View style={styles.frameChild}/>
                    <View style={[styles.frameParent, styles.parentFrameFlexBox]}>
                        <View style={styles.frameGroup}>
                            <View style={styles.garyLeeParent}>
                                <Text style={[styles.garyLee, styles.garyFlexBox]}>
                                    American Psycho
                                </Text>
                                <Text style={[styles.d, styles.dTypo]}>2D</Text>
                                <Text style={[styles.napisy, styles.dTypo]}>napisy</Text>
                            </View>
                            <Text style={[styles.garyLee1, styles.textTypo]}>Sala 6</Text>
                        </View>
                        <Text style={[styles.text, styles.textTypo]}>12:30</Text>
                    </View>

                    {/* koniec elementu przykladowego*/}
                </View>
                <View style={styles.siedzeniaChild}/>
                <View style={[styles.backParent, styles.parentFrameFlexBox]}>
                    <TouchableOpacity onPress={() => navigation.navigate(Bilety3)}>
                        <Image
                            style={styles.backIcon}
                            contentFit="cover"
                            source={require("./assets/back.png")}
                        />
                    </TouchableOpacity>
                    <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
                        <View style={styles.appNameWrapper}>
                            <View style={[styles.appName, styles.appSpaceBlock]}>
                                <Text style={[styles.ustawienia, styles.biletyLayout]}>
                                    Bilety
                                </Text>
                                <Text style={styles.ustawieniaKonta}>Rezerwacja</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[styles.frameParent5, styles.parentFrameFlexBox]}>
                    <View style={[styles.frameWrapper1, styles.frameWrapperFlexBox]}>
                        <View style={styles.appNameContainer}>
                            <View style={[styles.appName1, styles.appSpaceBlock]}>
                                <Text style={[styles.dlaCiebieI, styles.biletyLayout]}>
                                    Dla ciebie i dla rodziny
                                </Text>
                                <Text style={[styles.bilety, styles.biletyLayout]}>Bilety</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{left: -5}}>
                        <UserAvatar style={{zIndex: '0'}} navigation={navigation}/>
                    </View>
                </View>
            </View>

            <View style={{marginBottom: 47}}>
                <TabNav navigation={navigation}/>
            </View>
        </NavigationContainer>
    );
}
