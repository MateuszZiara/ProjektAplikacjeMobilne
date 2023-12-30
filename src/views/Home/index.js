import * as React from "react";
import { Image } from "expo-image";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    ImageBackground
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {styles} from "./styles";
import Singleton from "../../Classes/User"
import {PrzekaskiView} from "../Przekaski";
import {UstawieniaView} from "../Ustawienia";
import {useState} from "react";
import Carousel, {Pagination} from "react-native-snap-carousel";
import {Grzechotnik} from "../Grzechotnik";
import {Login} from "../Login";


export function Home({ navigation }){
    console.log(Singleton.name);
    const [activeIndex, setActiveIndex] = useState(0);
    const checkName = (name) => (name !== null ? name : "Czas na kino!");
    const checkDate = () => {
        const hours = new Date().getHours();
        return hours < 5 || hours >= 20 ? "Dobry wieczór," : "Dzień dobry,";
    };

    const checkHours = ([hours]) => {
        const currHour = new Date().getHours();
        return DateTime.parse(hours) > currHour ? <Text style={styles.tytulTypo1}>{hours}</Text> : <Text style={styles.znajdFilmW1}>{hours}</Text>;
    };

    const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
    function ActiveSlider(index)
    {
        setActiveIndex(index);
        console.log(index);
    }
    const carouselItems = [

        { title: 'American Psycho', text: 'napisy', review:'6,9/10', times:['15:00','19:30','22:00'], imageSource: require('./assets/img1.png') },
        { title: 'Chłopi', text: '', review:'7,5/10', times:['17:00','20:00'], imageSource: require('./assets/img2.png') },
        { title: 'Toy Story', text: 'dubbing', review:'7,2/10', times:['18:30','21:00'], imageSource: require('./assets/img3.png') },
        { title: 'Oppenheimer', text: 'napisy', review:'9/10', times:['11:00','18:30','20:00'], imageSource: require('./assets/img4.png') },
        { title: 'Black Swan - Czarny Łabędź', text: 'napisy', review:'8/10', times:['19:00','21:30'], imageSource: require('./assets/img5.png') },
    ];
    const renderItem = ({ item, index }) => {
        return (
            <ImageBackground
                style={{

                    borderRadius: 0,
                    height: 500,
                    width: viewportWidth+15,
                    justifyContent: 'center', // Center vertically
                    alignItems: 'center',
                }}
                source={item.imageSource}
            >

                <View style={styles.tytulWrapper}>
                    <Text style={[ styles.tytulTypo]}>{item.title}</Text>
                    <Text style={styles.tytulTypo1}>{item.text}</Text>
                    <Text style={styles.tytulTypo1}>{item.review}</Text>
                    <Text style={styles.tytulTypo1}>{item.times}</Text>
                </View>

            </ImageBackground>
        );
    };
    return (
        <ScrollView style={{ flex: 1 }}>
        <View style={styles.ekranGowny111}>
            {/* usunalem jakiś view i przesunelo sie wszystko w prawo */}
                <View style={[styles.groupView, styles.groupViewLayout]}>
                    <View style={styles.frameParent}>
                        <View style={styles.frameWrapper}>
                            <View style={styles.appNameWrapper}>
                                <View style={styles.appName}>
                                    <Text style={[styles.dzieDobry, styles.dzieDobryLayout]}>
                                        {checkDate()}
                                    </Text>
                                    <Text style={[styles.agnieszka, styles.dzieDobryLayout]}>
                                        {checkName(Singleton.name)}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.vectorWrapper} onPress={() => { //TODO Zrobić z tego moduł!!!
                           Singleton.name === null ? navigation.navigate(Login) : navigation.navigate(UstawieniaView);
                        }
                        }>
                            <Image
                                style={styles.frameChild}
                                contentFit="cover"
                                source={require("./assets/ellipse-19.png")}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={
                        {
                            //marginTop: 150,
                            zIndex:0
                        }
                    }>
                        <Image source={require('./gradientback.png')} style={{
                            borderRadius: 0,
                            height: 500,
                            width: viewportWidth+15,
                            justifyContent: 'center', // Center vertically
                            alignItems: 'center',
                        }}>

                        <Carousel
                            layout={'default'}
                            ref={(ref) => (this.carousel = ref)}
                            data={carouselItems}
                            sliderHeight={800}
                            loop={true}
                            itemHeight={900}
                            sliderWidth={viewportWidth}
                            itemWidth={viewportWidth}
                            renderItem={renderItem}
                            onSnapToItem={(index) => ActiveSlider(index)}
                        />
                        </Image>
                        <Pagination
                            dotsLength={carouselItems.length}
                            activeDotIndex={activeIndex}
                            containerStyle={{ marginTop: -25 }}
                            dotStyle={{
                                width: 20,
                                height: 10,
                                borderRadius: 5,
                                marginHorizontal: 8,
                                backgroundColor: 'rgba(49, 7, 139, 1)',
                            }}
                            inactiveDotStyle={{
                                backgroundColor: 'rgba(125, 125, 125, 0.33)',
                                width: 10,
                                height: 10,
                            }}
                            inactiveDotOpacity={0.6}
                            inactiveDotScale={0.8}
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

                                <TouchableOpacity onPress={() => navigation.navigate(Grzechotnik)}>
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
                                <View style={[styles.rightArrowContainer, styles.rightWrapperFlexBox]}>
                                    <Image
                                        style={styles.rightArrowIcon}
                                        contentFit="cover"
                                        source={require("./assets/right-arrow.png")}
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
                                    <View style={[styles.rightArrowContainer, styles.rightWrapperFlexBox]}>
                                        <Image
                                            style={styles.rightArrowIcon}
                                            contentFit="cover"
                                            source={require("./assets/right-arrow.png")}
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
                                <View style={[styles.rightArrowContainer, styles.rightWrapperFlexBox]}>
                                    <Image
                                        style={styles.rightArrowIcon}
                                        contentFit="cover"
                                        source={require("./assets/right-arrow.png")}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={[styles.singleBar1, styles.singleLayout]}>
                            <View style={[styles.tytulParent, styles.tytulParentLayout]}>
                                <Text style={[styles.tytul, styles.tytulTypo1]}>19:00</Text>
                                <Text style={[styles.tytul1, styles.tytulTypo1]}>20:30</Text>
                                <View style={styles.frameLayout}>
                                    <View style={[styles.rightArrowContainer, styles.rightWrapperFlexBox]}>
                                        <Image
                                            style={styles.rightArrowIcon}
                                            contentFit="cover"
                                            source={require("./assets/right-arrow.png")}
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
                                    <View style={[styles.rightArrowContainer, styles.rightWrapperFlexBox]}>
                                        <Image
                                            style={styles.rightArrowIcon}
                                            contentFit="cover"
                                            source={require("./assets/right-arrow.png")}
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
                                    <View style={[styles.rightArrowContainer, styles.rightWrapperFlexBox]}>
                                        <Image
                                            style={styles.rightArrowIcon}
                                            contentFit="cover"
                                            source={require("./assets/right-arrow.png")}
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
                    <ImageBackground
                        style={styles.glowingSpaceshipOrbitsPlaneIcon1}
                        resizeMode="cover"  // Dodaj tę linię
                        source={require("./assets/popcorn.png")}
                        />

                        <View style={styles.frameGroup}>
                            <View>

                                <Text style={[styles.wylosujSwjRabat1, styles.znajdFilmW1Typo]}>
                                    Jedyne w swoim rodzaju
                                </Text>
                                <Text style={styles.grzechotnik}>Przekąski</Text>
                            </View>
                            <View style={[styles.rightArrowWrapper, styles.rightFlexBox]}>

                                <TouchableOpacity onPress={() => navigation.navigate(PrzekaskiView)}>
                                <Image
                                    style={styles.rightArrowIcon8}
                                    contentFit="cover"
                                    source={require("./assets/right-arrow.png")}
                                />
                                    </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

        </View>
        </ScrollView>
    );
}
