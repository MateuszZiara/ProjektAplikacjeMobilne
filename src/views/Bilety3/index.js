import * as React from "react";
import {useState} from "react";
import {Image} from "expo-image";
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {styles} from "./styles";
import {Calendar} from "react-native-calendars";
import {Bilety4} from "../Bilety4";
import {Bilety2} from "../Bilety2";
import {UserAvatar} from "../../components/UserAvatar";
import {NavigationContainer} from "@react-navigation/native";
import TabNav from "../../navigation/Tab";

export function Bilety3({navigation}) {
    const [selected, setSelected] = useState('');
    return (
        <NavigationContainer independent={true}>
            <ScrollView style={{flex: 1}}>
                <View style={styles.wybprDaty}>
                    <View style={[styles.headerEkranuPrzeksek, styles.sliderLayout]}>
                        <View style={[styles.slider, styles.sliderPosition]}>
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
                            <View style={[styles.sliderItem, styles.sliderPosition]}/>
                            <LinearGradient
                                style={styles.sliderInner}
                                locations={[0.53, 1]}
                                colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"]}
                            />
                        </View>
                    </View>

                    <View style={[styles.backParent, styles.wrapperParentFlexBox]}>
                        <TouchableOpacity onPress={() => navigation.navigate(Bilety2)}>
                            <Image
                                style={styles.backIconLayout1}
                                contentFit="cover"
                                source={require("./assets/back.png")}
                            />
                        </TouchableOpacity>

                        <View style={[styles.frameWrapper, styles.frameFlexBox]}>
                            <View style={styles.appNameWrapper}>
                                <View style={[styles.appName, styles.appSpaceBlock]}>
                                    <Text style={[styles.ustawienia, styles.ustawieniaTypo]}>
                                        Bilety
                                    </Text>
                                    <Text style={[styles.ustawieniaKonta, styles.biletyTypo]}>
                                        Rezerwacja
                                    </Text>
                                </View>
                            </View>
                        </View>

                    </View>

                    <View style={[styles.frameParent, styles.wrapperParentFlexBox]}>
                        <View style={[styles.frameContainer, styles.frameFlexBox]}>
                            <View style={styles.appNameContainer}>
                                <View style={[styles.appName1, styles.appSpaceBlock]}>
                                    <Text style={[styles.dlaCiebieI, styles.ustawieniaTypo]}>
                                        Dla ciebie i dla rodziny
                                    </Text>
                                    <Text style={[styles.bilety, styles.biletyTypo]}>Bilety</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{left: -10}}>
                            <UserAvatar style={{zIndex: '0'}} navigation={navigation}/>
                        </View>
                    </View>
                    <Calendar
                        onDayPress={day => {
                            console.log('selected day', day.dateString);
                            setSelected(day.dateString);
                        }}
                        markedDates={{
                            [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
                        }}
                        style={{
                            marginTop: 300,
                            elevation: 5,
                            borderWidth: 4,
                            borderColor: 'rgba(100, 100, 100, 0.2)'
                        }}
                        theme={{
                            calendarBackground: '#222',
                            dayTextColor: '#fff',
                            textDisabledColor: '#444',
                            monthTextColor: '#888'
                        }}
                    />
                    <TouchableOpacity onPress={() => navigation.navigate(Bilety4)}>
                        <View style={styles.rectangleParent}>
                            <View style={styles.frameItem}/>
                            <View style={styles.garyLeeParent}>
                                <Text style={[styles.garyLee, styles.garyLeeTypo]}>Dalej</Text>
                                <Image
                                    style={[styles.maskGroupIcon3, styles.iconLayout]}
                                    contentFit="cover"
                                    source={require("./assets/mask-group.png")}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={{marginBottom: 47}}>
                <TabNav navigation={navigation}/>
            </View>
        </NavigationContainer>
    );
}
