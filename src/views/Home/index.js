import * as React from "react";
import { Image } from "expo-image";
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    ImageBackground, FlatList
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {styles} from "./styles";
import Singleton from "../../Classes/User"
import {PrzekaskiView} from "../Przekaski";
import {UstawieniaView} from "../Ustawienia";
import {useEffect, useState} from "react";
import Carousel, {Pagination} from "react-native-snap-carousel";
import {Grzechotnik} from "../Grzechotnik";
import {Login} from "../Login";
import { Avatar } from 'react-native-paper';
import zIndex from "@mui/material/styles/zIndex";
import {UserAvatar} from "../../components/UserAvatar";
import * as DateTime from "react-native-svg";
import Search from "../../Classes/Search"
import {RepertuarView} from "../Repertuar";
import {RepertuarSearch} from "../RepertuarSearch";
import Movie from "../../Classes/Movie";

function IfAvailableToday({ hours }) {
    const currentHour = new Date().getHours();


    const timeComponents = hours.map((hour, index) => {
        const argumentHour = parseInt(hour, 10);

        if (!isNaN(argumentHour)) {
            let style = argumentHour > currentHour ? styles.active : styles.inactive;
            if (index === hours.length - 1) { //nie wchodzą
            return (
                <View key={index} >
                    <Text style={[styles.sliderh2,style]}>{hour} </Text>
                </View>
            );
        }
        else{
            return (
                <View key={index} >
                    <Text style={[styles.cayRepertuar,style]}>{hour} | </Text>
                </View>
            );
        }

        }
    });
    return (
        <View style={{ flexDirection: 'row' }}>
            {timeComponents}
        </View>
    );

}

export function Home({ navigation }){
    const renderItemList = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={{ color: 'white' }}>{`${item.name} ${item.start} ${item.end}`}</Text>
            <Image
                style={styles.rightArrowIcon}
                contentFit="cover"
                source={require("./assets/right-arrow.png")}
            />
        </View>
    );
    const [refresh, setRefresh] = useState(false);
    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
            // The screen is focused
            // Call the function to refresh the FlatList
            refreshFlatList();
        });

        // Return the cleanup function to unsubscribe from the event
        return unsubscribe;
    }, [navigation, refresh]);

    // Function to refresh the FlatList
    const refreshFlatList = () => {
        // Toggle the state to force a re-render
        setRefresh((prevRefresh) => !prevRefresh);
    };



    const [activeIndex, setActiveIndex] = useState(0);
    const checkName = (name) => (name !== null ? name : "Czas na kino!");
    const checkDate = () => {
        const hours = new Date().getHours();
        return hours < 5 || hours >= 20 ? "Dobry wieczór," : "Dzień dobry,";
    };
    const [phrase, setPhrase] = useState('');
    function searchLogic()
    {
        Search.phrase = phrase;
        console.log(Search.phrase);
        navigation.navigate(RepertuarSearch)
    }
    const checkHours = ([hours]) => { //TODO jak będzie baza filmów to wrócić
        const currHour = new Date().getHours();
        return DateTime.parse(hours) > currHour ? <Text style={styles.tytulTypo1}>{hours}</Text> : <Text style={styles.znajdFilmW1}>{hours}</Text>;
    };

    const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
    function ActiveSlider(index)
    {
        setActiveIndex(index);
        {/* console.log(index); */}  //TU BYŁ PROBLEM Z TYM RENDEROWANIEM XDDD //TODO PureComponents
    }
    const carouselItems = [

        { title: 'American Psycho', text: 'napisy', review:'6,9/10', times:['15:00','19:30','22:00'], imageSource: require('./assets/img1.png') },
        { title: 'Chłopi', text: 'oryginał', review:'7,5/10', times:['17:00','20:00'], imageSource: require('./assets/img2.png') },
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
                    zIndex: 0
                }}
                source={item.imageSource}
            >
            <Image source={require('./assets/gradientback.png')} style={{zIndex: 1}} />
                <View style={styles.sliderView}>
                    <Text style={styles.sliderh1}>{item.title}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.sliderh2}>{item.text}</Text>
                        <Text style={[styles.sliderh2r,{marginLeft: 20}]}>{item.review}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>{item.times.map((time, index) => <IfAvailableToday key={index} hours={[time]} />)}</View>

                </View>

            </ImageBackground>
        );
    };
    return (
        <ScrollView style={{ flex: 1 }}>
        <View style={styles.ekranGowny111}>
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
                        <View style={{left:-5}}>
                            <UserAvatar style={{zIndex: '0'}} navigation={navigation} />
                        </View>
                    </View>
                    <View style={[{zIndex:0}]}>
                        <Image source={require('./assets/gradientback.png')} style={{
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
                            <TextInput style={[styles.znajdFilmW1, styles.znajdFilmW1Typo]} placeholder='Znajdź film w repertuarze' placeholderTextColor='white' value={phrase} onChangeText={(text) => setPhrase(text)}>
                            </TextInput>
                            <TouchableOpacity onPress={() => searchLogic()}>
                            <Image
                                style={styles.logoIcon1}
                                contentFit="cover"
                                source={require("./assets/logo.png")}
                            />
                            </TouchableOpacity>
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


                                    <Text style={styles.grzechotnik}>Grzechotnik</Text>


                            </View>
                            <View style={[styles.rightArrowWrapper, styles.rightFlexBox]}>
                                <TouchableOpacity onPress={() => navigation.navigate(Grzechotnik)}>
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
                <View style={styles.frameView}>
                    <View style={[styles.buttonWrapper, styles.buttonLayout]}>
                        <View style={[styles.button, styles.buttonLayout]}>
                            <Text style={styles.cayRepertuar}>Cały repertuar</Text>
                        </View>
                    </View>

                    <Text style={styles.najbliszeSeanse}>Najbliższe seanse</Text>
                    <View style={[styles.repertuarParent, styles.repertuarPosition]}>

                        <Text style={[styles.repertuar1, styles.text2Typo]}>Repertuar</Text>
                        <Text style={[styles.sprawdNaszeNowoci1, styles.znajdFilmW1Typo]}>
                            Sprawdź nasze nowości.
                        </Text>
                        <View>
                            <FlatList
                                key={refresh}
                                data={Movie.array}
                                renderItem={renderItemList}
                                keyExtractor={(item) => item.id.toString()}
                            />
                        </View>
                    </View>
                </View>
            <TouchableOpacity onPress={() => navigation.navigate(PrzekaskiView)}>
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


                                <Image
                                    style={styles.rightArrowIcon8}
                                    contentFit="cover"
                                    source={require("./assets/right-arrow.png")}
                                />

                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
        </ScrollView>
    );
}
