import * as React from "react";
import { Image } from "expo-image";
import {StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {styles} from "./styles";
import Singleton from "../../Classes/User"
import {PrzekaskiView} from "../Przekaski";
import {UstawieniaView} from "../Ustawienia";
import {useState} from "react";
import Carousel from "react-native-snap-carousel";

export function Home({ navigation }){
    console.log(Singleton.name);
    const [activeIndex, setActiveIndex] = useState(0);
    function ActiveSlider(index)
    {
        setActiveIndex(index);
        console.log(index);
    }
    const carouselItems = [
        { title: 'Item 1', text: 'Text 1' },
        { title: 'Item 2', text: 'Text 2' },
        { title: 'Item 3', text: 'Text 3' },
        { title: 'Item 4', text: 'Text 4' },
        { title: 'Item 5', text: 'Text 5' },
    ];
    const renderItem = ({ item, index }) => {
        return (
            <View
                style={{
                    backgroundColor: 'floralwhite',
                    borderRadius: 5,
                    height: 250,
                    marginLeft: 25,
                    marginRight: 25,
                    justifyContent: 'center', // Center vertically
                    alignItems: 'center',
                    //!TODO paginationItemPadSize: 2,
                }}
            >

                <Image
                    style={{
                        top: 7,
                        left: 37,
                        width: 88,
                        height: 112,
                        position: "absolute",
                    }}
                    source={item.imageSource}
                />
                <Text style={{ fontSize: 30 }}>{item.title}</Text>
                <Text>{item.text}</Text>
            </View>
        );
    };
    return (
        <ScrollView style={{ flex: 1 }}>
        <View style={styles.ekranGowny111}>
            <View style={styles.groupParent}>
                <View style={[styles.groupView, styles.groupViewLayout]}>
                    <View style={styles.frameParent}>
                        <View style={styles.frameWrapper}>
                            <View style={styles.appNameWrapper}>
                                <View style={styles.appName}>
                                    <Text style={[styles.dzieDobry, styles.dzieDobryLayout]}>
                                        Dzień dobry,
                                    </Text>
                                    <Text style={[styles.agnieszka, styles.dzieDobryLayout]}>
                                        {Singleton.name}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.vectorWrapper} onPress={() => navigation.navigate(UstawieniaView)}>
                            <Image
                                style={styles.frameChild}
                                contentFit="cover"
                                source={require("./assets/ellipse-19.png")}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={
                        {
                            marginTop: 150,
                        }
                    }>
                        <Carousel
                            layout={'default'}
                            ref={(ref) => (this.carousel = ref)}
                            data={carouselItems}
                            sliderWidth={300}
                            itemWidth={300}
                            renderItem={renderItem}
                            onSnapToItem={(index) => ActiveSlider(index)}
                        />
                    </View>
                </View>

                <View style={[styles.searchBarWrapper, styles.wrapperLayout]}>
                    <View style={styles.searchBar}>
                        <View style={styles.znajdFilmWRepertuarzeParent}>
                            <TextInput style={[styles.znajdFilmW1, styles.znajdFilmW1Typo]} placeholder='Znajdź film w repertuarze' placeholderTextColor='white'>
                            </TextInput>
                            <Image
                                style={styles.logoIcon1}
                                contentFit="cover"
                                source={require("./assets/logo.png")}
                            />
                        </View>
                    </View>
                </View>
                <View style={[styles.komponentPrzekskiWrapper, styles.wrapperLayout]}>
                    <View style={[styles.komponentPrzekski, styles.repertuarPosition]}>
                        <View style={styles.maskGroup}>
                            <Image
                                style={[
                                    styles.glowingSpaceshipOrbitsPlaneIcon,
                                    styles.iconPosition,
                                ]}
                                contentFit="cover"
                                source={require("./assets/glowingspaceshiporbitsplanetstarrygalaxygeneratedbyai-1.png")}
                            />
                            <Image
                                style={[styles.image8Icon, styles.iconPosition]}
                                contentFit="cover"
                                source={require("./assets/image-8.png")}
                            />
                        </View>
                        <LinearGradient
                            style={[styles.komponentPrzekskiChild, styles.sliderChildBg]}
                            locations={[0, 0.69]}
                            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"]}
                        />
                        <View style={styles.frameGroup}>
                            <View>
                                <Text style={[styles.wylosujSwjRabat1, styles.znajdFilmW1Typo]}>
                                    Wylosuj swój rabat
                                </Text>

                                <TouchableOpacity onPress={() => navigation.navigate(PrzekaskiView)}>
                                    <Text style={styles.grzechotnik}>Grzechotnik</Text>
                                </TouchableOpacity>

                            </View>
                            <View style={[styles.rightArrowWrapper, styles.rightFlexBox]}>
                                <Image
                                    style={styles.rightArrowIcon8}
                                    contentFit="cover"
                                    source={require("./assets/right-arrow.png")}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.frameView}>
                    <View style={[styles.buttonWrapper, styles.buttonLayout]}>
                        <View style={[styles.button, styles.buttonLayout]}>
                            <Text style={styles.cayRepertuar}>Cały repertuar</Text>
                        </View>
                    </View>
                    <View style={[styles.repertuar, styles.repertuarPosition]}>
                        <View style={[styles.singleBar, styles.singleLayout]}>
                            <View style={[styles.tytulParent, styles.tytulParentLayout]}>
                                <Text style={[styles.tytul, styles.tytulTypo1]}>18:30</Text>
                                <Text style={[styles.tytul1, styles.tytulTypo1]}>21:30</Text>
                                <View style={[styles.rightArrowContainer, styles.frameLayout]}>
                                    <Image
                                        style={styles.rightArrowIcon9}
                                        contentFit="cover"
                                        source={require("./assets/right-arrow1.png")}
                                    />
                                </View>
                            </View>
                            <View style={styles.rectangleParent}>
                                <View style={styles.rectangleParent} />
                                <View style={[styles.tytulWrapper, styles.tytulPosition]}>
                                    <Text style={[styles.tytul2, styles.tytulTypo]}>
                                        Batman Początki
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.singleBar1, styles.singleLayout]}>
                            <View style={[styles.tytulParent, styles.tytulParentLayout]}>
                                <Text style={[styles.tytul, styles.tytulTypo1]}>19:00</Text>
                                <Text style={[styles.tytul1, styles.tytulTypo1]}>22:00</Text>
                                <View style={styles.frameLayout}>
                                    <View style={[styles.rightArrowFrame, styles.frameLayout]}>
                                        <Image
                                            style={styles.rightArrowIcon9}
                                            contentFit="cover"
                                            source={require("./assets/right-arrow1.png")}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.rectangleParent}>
                                <View style={styles.rectangleParent} />
                                <View style={[styles.tytulWrapper, styles.tytulPosition]}>
                                    <Text style={[styles.tytul5, styles.tytulTypo]}>
                                        Pięć Koszmarnych Nocy
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.singleBar1, styles.singleLayout]}>
                            <View style={[styles.tytulParent1, styles.tytulPosition]}>
                                <Text style={[styles.tytul, styles.tytulTypo1]}>18:45</Text>
                                <Text style={[styles.tytul1, styles.tytulTypo1]}>20:45</Text>
                            </View>
                            <View style={styles.rectangleParent}>
                                <View style={styles.rectangleParent} />
                                <View style={[styles.tytulWrapper, styles.tytulPosition]}>
                                    <Text style={[styles.tytul2, styles.tytulTypo]}>
                                        American Psycho
                                    </Text>
                                </View>
                            </View>
                            <View style={[styles.singleBarInner, styles.frameLayout]}>
                                <View style={[styles.rightArrowFrame, styles.frameLayout]}>
                                    <Image
                                        style={styles.rightArrowIcon9}
                                        contentFit="cover"
                                        source={require("./assets/right-arrow1.png")}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={[styles.singleBar1, styles.singleLayout]}>
                            <View style={[styles.tytulParent, styles.tytulParentLayout]}>
                                <Text style={[styles.tytul, styles.tytulTypo1]}>19:00</Text>
                                <Text style={[styles.tytul1, styles.tytulTypo1]}>20:30</Text>
                                <View style={styles.frameLayout}>
                                    <View style={[styles.rightArrowFrame, styles.frameLayout]}>
                                        <Image
                                            style={styles.rightArrowIcon9}
                                            contentFit="cover"
                                            source={require("./assets/right-arrow1.png")}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.rectangleParent}>
                                <View style={styles.rectangleParent} />
                                <View style={[styles.tytulWrapper, styles.tytulPosition]}>
                                    <Text style={[styles.tytul2, styles.tytulTypo]}>
                                        Toy Story
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.singleBar1, styles.singleLayout]}>
                            <View style={[styles.tytulParent, styles.tytulParentLayout]}>
                                <Text style={[styles.tytul, styles.tytulTypo1]}>19:30</Text>
                                <Text style={[styles.tytul1, styles.tytulTypo1]}>22:30</Text>
                                <View style={styles.frameLayout}>
                                    <View style={[styles.rightArrowFrame, styles.frameLayout]}>
                                        <Image
                                            style={styles.rightArrowIcon9}
                                            contentFit="cover"
                                            source={require("./assets/right-arrow1.png")}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.rectangleParent}>
                                <View style={styles.rectangleParent} />
                                <View style={[styles.tytulWrapper, styles.tytulPosition]}>
                                    <Text style={[styles.tytul2, styles.tytulTypo]}>
                                        Napoleon
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.singleBar1, styles.singleLayout]}>
                            <View style={[styles.tytulParent, styles.tytulParentLayout]}>
                                <Text style={[styles.tytul, styles.tytulTypo1]}>19:15</Text>
                                <Text style={[styles.tytul1, styles.tytulTypo1]}>20:15</Text>
                                <View style={styles.frameLayout}>
                                    <View style={[styles.rightArrowFrame, styles.frameLayout]}>
                                        <Image
                                            style={styles.rightArrowIcon9}
                                            contentFit="cover"
                                            source={require("./assets/right-arrow1.png")}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.rectangleParent}>
                                <View style={styles.rectangleParent} />
                                <View style={[styles.tytulWrapper, styles.tytulPosition]}>
                                    <Text style={[styles.tytul2, styles.tytulTypo]}>Auta 2</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.najbliszeSeanse}>Najbliższe seanse</Text>
                    <View style={[styles.repertuarParent, styles.repertuarPosition]}>
                        <Text style={[styles.repertuar1, styles.text2Typo]}>Repertuar</Text>
                        <Text style={[styles.sprawdNaszeNowoci1, styles.znajdFilmW1Typo]}>
                            Sprawdź nasze nowości.
                        </Text>
                    </View>
                </View>
                <View style={styles.komponentPrzekskiFrame}>
                    <View style={[styles.komponentPrzekski1, styles.repertuarPosition]}>
                        <Image
                            style={styles.glowingSpaceshipOrbitsPlaneIcon1}
                            contentFit="cover"
                            source={require("./assets/glowingspaceshiporbitsplanetstarrygalaxygeneratedbyai-11.png")}
                        />
                        <LinearGradient
                            style={[styles.komponentPrzekskiChild, styles.sliderChildBg]}
                            locations={[0, 0.69]}
                            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"]}
                        />
                        <View style={styles.frameGroup}>
                            <View>
                                <Text style={[styles.wylosujSwjRabat1, styles.znajdFilmW1Typo]}>
                                    Jedyne w swoim rodzaju
                                </Text>
                                <Text style={styles.grzechotnik}>Przekąski</Text>
                            </View>
                            <View style={[styles.rightArrowWrapper, styles.rightFlexBox]}>
                                <Image
                                    style={styles.rightArrowIcon8}
                                    contentFit="cover"
                                    source={require("./assets/right-arrow2.png")}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={[styles.iphonestatusbar, styles.repertuarPosition]}>
                <Text style={[styles.text5, styles.text5FlexBox]}>9.41</Text>
                <View style={styles.signalParent}>
                    <Image
                        style={styles.signalIcon1}
                        contentFit="cover"
                        source={require("./assets/signal.png")}
                    />
                    <Image
                        style={styles.wiFiIcon1}
                        contentFit="cover"
                        source={require("./assets/wifi.png")}
                    />
                    <Image
                        style={styles.fullBatteryIcon1}
                        contentFit="cover"
                        source={require("./assets/full-battery.png")}
                    />
                </View>
            </View>
        </View>
        </ScrollView>
    );
}
