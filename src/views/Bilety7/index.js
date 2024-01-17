import * as React from "react";
import { Image } from "expo-image";
import {View, Text, TouchableOpacity} from "react-native";
import {styles} from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import {UserAvatar} from "../../components/UserAvatar";
import {Bilety3_vip} from "../Bilety3_vip";

export function Bilety7({ navigation }) {

    return (
        <View style={styles.potwierdzenieWyboru}>
            <View style={[styles.headerEkranuPrzeksek, styles.sliderLayout]}>
                <View style={[styles.slider, styles.parentPosition]}>
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
            <View style={styles.backParent}>
                <TouchableOpacity onPress={() =>navigation.navigate(Bilety3_vip)}>
                    <Image
                        style={styles.backIcon}
                        contentFit="cover"
                        source={require("./assets/back.png")}
                    />
                </TouchableOpacity>
                <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
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
            <View style={styles.frameParentPosition}>
                <View>
                    <View style={styles.nazwaFilmuParent}>
                        <Text style={[styles.nazwaFilmu, styles.bilet1Layout]}>
                            Nazwa filmu
                        </Text>
                        <Text style={[styles.americanPsycho, styles.bilet1Typo]}>
                            American Psycho
                        </Text>
                    </View>
                    <View style={styles.nazwaFilmuParent}>
                        <Text style={[styles.nazwaFilmu, styles.bilet1Layout]}>Data</Text>
                        <Text style={[styles.americanPsycho, styles.bilet1Typo]}>
                            12.11.2023
                        </Text>
                    </View>
                    <View style={styles.nazwaFilmuParent}>
                        <Text style={[styles.nazwaFilmu, styles.bilet1Layout]}>
                            Godzina
                        </Text>
                        <Text style={[styles.americanPsycho, styles.bilet1Typo]}>
                            19:30
                        </Text>
                    </View>
                    <View style={styles.nazwaFilmuParent}>
                        <Text style={[styles.nazwaFilmu, styles.bilet1Layout]}>
                            Szczegóły
                        </Text>
                        <Text style={[styles.americanPsycho, styles.bilet1Typo]}>
                            2D | Napisy
                        </Text>
                    </View>
                    <View style={styles.nazwaFilmuParent}>
                        <Text style={[styles.nazwaFilmu, styles.bilet1Layout]}>Sala</Text>
                        <Text style={[styles.americanPsycho, styles.bilet1Typo]}>6</Text>
                    </View>
                </View>
                <View style={styles.groupParent}>
                    <View style={styles.frameContainer}>
                        <View style={[styles.bilet1Wrapper, styles.parentPosition]}>
                            <Text style={[styles.bilet1, styles.bilet1Typo]}>Bilet #1</Text>
                        </View>
                        <View style={[styles.rzdParent, styles.parentPosition]}>
                            <Text style={[styles.nazwaFilmu, styles.bilet1Layout]}>Rząd</Text>
                            <Text style={[styles.americanPsycho, styles.bilet1Typo]}>E</Text>
                        </View>
                        <View style={[styles.siedzenieParent, styles.parentPosition]}>
                            <Text style={[styles.nazwaFilmu, styles.bilet1Layout]}>
                                Siedzenie
                            </Text>
                            <Text style={[styles.americanPsycho, styles.bilet1Typo]}>6</Text>
                        </View>
                    </View>
                    <View style={styles.groupView}>
                        <View style={[styles.bilet1Wrapper, styles.parentPosition]}>
                            <Text style={[styles.bilet1, styles.bilet1Typo]}>Bilet #2</Text>
                        </View>
                        <View style={[styles.rzdParent, styles.parentPosition]}>
                            <Text style={[styles.nazwaFilmu, styles.bilet1Layout]}>Rząd</Text>
                            <Text style={[styles.americanPsycho, styles.bilet1Typo]}>E</Text>
                        </View>
                        <View style={[styles.siedzenieParent, styles.parentPosition]}>
                            <Text style={[styles.nazwaFilmu, styles.bilet1Layout]}>
                                Siedzenie
                            </Text>
                            <Text style={[styles.americanPsycho, styles.bilet1Typo]}>7</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.groupParent}>
                    <View style={styles.frameContainer}>
                        <View style={[styles.bilet1Wrapper, styles.parentPosition]}>
                            <Text style={[styles.bilet1, styles.bilet1Typo]}>Bilet #1</Text>
                        </View>
                        <View style={[styles.rzdParent, styles.parentPosition]}>
                            <Text style={[styles.nazwaFilmu, styles.bilet1Layout]}>Rząd</Text>
                            <Text style={[styles.americanPsycho, styles.bilet1Typo]}>E</Text>
                        </View>
                        <View style={[styles.siedzenieParent, styles.parentPosition]}>
                            <Text style={[styles.nazwaFilmu, styles.bilet1Layout]}>
                                Siedzenie
                            </Text>
                            <Text style={[styles.americanPsycho, styles.bilet1Typo]}>6</Text>
                        </View>
                    </View>
                    <View style={styles.groupView}>
                        <View style={[styles.bilet1Wrapper, styles.parentPosition]}>
                            <Text style={[styles.bilet1, styles.bilet1Typo]}>Bilet #2</Text>
                        </View>
                        <View style={[styles.rzdParent, styles.parentPosition]}>
                            <Text style={[styles.nazwaFilmu, styles.bilet1Layout]}>Rząd</Text>
                            <Text style={[styles.americanPsycho, styles.bilet1Typo]}>E</Text>
                        </View>
                        <View style={[styles.siedzenieParent, styles.parentPosition]}>
                            <Text style={[styles.nazwaFilmu, styles.bilet1Layout]}>
                                Siedzenie
                            </Text>
                            <Text style={[styles.americanPsycho, styles.bilet1Typo]}>7</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.potwierdzenieWyboruChild} />
            <View style={styles.frameParent3}>
                <View style={[styles.frameWrapper1, styles.frameWrapperFlexBox]}>
                    <View style={styles.appNameContainer}>
                        <View style={[styles.appName1, styles.appSpaceBlock]}>
                            <Text style={[styles.dlaCiebieI, styles.ustawieniaTypo]}>
                                Dla ciebie i dla rodziny
                            </Text>
                            <Text style={[styles.bilety, styles.biletyTypo]}>Bilety</Text>
                        </View>
                    </View>
                </View>
                    <View style={{left:-5}}>
                        <UserAvatar style={{zIndex: '0'}} navigation={navigation} />
                    </View>
            </View>
            <View style={styles.rectangleParent}>
                <View style={[styles.frameItem, styles.frameLayout]} />
                <LinearGradient
                    style={[styles.frameInner, styles.frameLayout]}
                    locations={[0, 1]}
                    colors={["rgba(244, 22, 22, 0.2)", "rgba(172, 10, 0, 0.2)"]}
                />
                <View style={[styles.garyLeeParent, styles.garyPosition]}>
                    <Text style={[styles.garyLee, styles.garyTypo]}>
                        Dodaj do zamówienia
                    </Text>
                    <Image
                        style={[styles.maskGroupIcon, styles.maskGroupLayout]}
                        contentFit="cover"
                        source={require("./assets/mask-group.png")}
                    />
                </View>
                <View style={[styles.garyLeeGroup, styles.garyPosition]}>
                    <Text style={[styles.garyLee1, styles.garyTypo]}>
                        Anuluj rezerwację
                    </Text>
                    <Image
                        style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
                        contentFit="cover"
                        source={require("./assets/mask-group1.png")}
                    />
                </View>
            </View>
            <View
                style={[styles.potwierdzenieWyboruItem, styles.frameParentPosition]}
            />
            <LinearGradient
                style={[styles.potwierdzenieWyboruInner, styles.dodajParentPosition]}
                locations={[0, 1]}
                colors={["rgba(80, 77, 255, 0.2)", "rgba(133, 76, 255, 0.2)"]}
            />
            <View style={[styles.dodajParent, styles.dodajParentPosition]}>
                <Text style={styles.dodaj}>Dodaj do kalendarza</Text>
                <Image
                    style={[styles.maskGroupIcon2, styles.maskGroupLayout]}
                    contentFit="cover"
                    source={require("./assets/mask-group2.png")}
                />
            </View>
        </View>
    );
}
