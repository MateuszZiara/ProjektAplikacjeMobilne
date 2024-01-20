import * as React from "react";
import {useEffect, useState} from "react";
import {Image} from "expo-image";
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {styles} from "./styles"
import {PrzekaskiView} from "../Przekaski";
import {UserAvatar} from "../../components/UserAvatar";
import axios from "axios";
import {Przekaski3View} from "../Przekaski3";
import {NavigationContainer} from "@react-navigation/native";
import TabNav from "../../navigation/Tab";

export function Przekaski2View({navigation, route}) {
    const [error, setError] = useState(false);
    const firebaseURL = "https://aplikacjemobilne-ff0b1-default-rtdb.europe-west1.firebasedatabase.app";
    const [goods, setGoods] = useState([]);
    const name = route.params && route.params.param === 0 ? "Przekąski" : "Napoje";
    const param = route.params ? route.params.param : 0; // Pobierz wartość param z route.params, jeśli jest dostępny, w przeciwnym razie ustaw na 0

    const diff = param === 0 ? 'foodProducts' : 'drinkProducts';
    const imagesFood = {
        1: require('../../images/products/malypopcorn.png'),
        2: require('../../images/products/duzypopcorn.png'),
        3: require('../../images/products/nachosy.png'),
        4: require('../../images/products/nachosy.png'),
        5: require('../../images/products/mms.png'),
        6: require('../../images/products/snickers.png'),
        7: require('../../images/products/mars.png'),
        8: require('../../images/products/milkyway.png'),
        9: require('../../images/products/laysziel.png'),
        10: require('../../images/products/layspapr.png'),
        11: require('../../images/products/malypopcorn.png'),
        12: require('../../images/products/duzypopcorn.png'),
    };

    const imagesDrink = {
        1: require('../../images/products/sokjabl.png'),
        2: require('../../images/products/sokpoma.png'),
        3: require('../../images/products/sokwiel.png'),
        4: require('../../images/products/woda.png'),
        5: require('../../images/products/coca.png'),
        6: require('../../images/products/cocazero.png'),
        7: require('../../images/products/fanta.png'),
        8: require('../../images/products/sprite.png'),
        9: require('../../images/products/lipton.png'),
        10: require('../../images/products/redbull.png'),
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${firebaseURL}/przekaski/${diff}.json`);
                setGoods(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(true);
            }
        };

        fetchData();
    }, [param, diff]);


    const renderProduct = (product) => {
        const imageKey = product.id.toString();
        const images = param === 0 ? imagesFood : imagesDrink;

        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('Przekaski3View', {
                    param: route.params.param,
                    itemid: product.id,
                })}
                key={product.id}
                style={[styles.parentLayout, styles.lodyOreoParent]}
            >
                <Text style={[styles.lodyTypo, styles.lodyOreo]}>{product.name}</Text>
                <Image style={[styles.image10Icon, styles.image10IconPosition]} source={images[imageKey]} />
            </TouchableOpacity>

        );
    };

    return (
        <NavigationContainer independent={true}>
            <View style={{ flex: 1 }}>
            <ScrollView>
            <View style={styles.wzr}>
                <View style={styles.headerEkranuPrzeksekParent}>
                    <View style={styles.headerEkranuPrzeksek}>
                        <View style={styles.headerEkranuPrzeksek}>
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
                            <View style={styles.sliderItem}/>
                            <LinearGradient
                                style={[styles.sliderInner, styles.sliderInnerPosition]}
                                locations={[0.53, 1]}
                                colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"]}
                            />
                        </View>
                        <View style={[styles.frameParent, styles.parentFlexBox]}>
                            <View style={[styles.frameWrapper, styles.frameFlexBox]}>
                                <View style={styles.appNameWrapper}>
                                    <View style={[styles.appName, styles.appSpaceBlock]}>
                                        <Text style={[styles.idealneNaSeans, styles.ustawieniaTypo]}>
                                            Idealne na seans
                                        </Text>
                                        <Text style={[styles.przekski, styles.przekskiTypo]}>
                                            Przekąski
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.gb}>
                                <UserAvatar style={{zIndex: '0'}} navigation={navigation}/>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.backParent, styles.parentFlexBox]}>
                        <TouchableOpacity onPress={() => navigation.navigate(PrzekaskiView)}>
                            <Image
                                style={styles.backIcon}
                                contentFit="cover"
                                source={require("./assets/back.png")}
                            />
                        </TouchableOpacity>
                        <View style={[styles.frameContainer, styles.frameFlexBox]}>
                            <View style={styles.appNameContainer}>
                                <View style={[styles.appName1, styles.appSpaceBlock]}>
                                    <Text
                                        style={[styles.ustawienia, styles.ustawieniaTypo]}>
                                        {`Przekąski`}</Text>
                                    <Text style={[styles.ustawieniaKonta, styles.przekskiTypo]}>
                                        {name}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.sliderPrzekasekParent}>
                            <View style={styles.sss}>
                                {error ? (
                                    <Text>Error fetching data</Text>
                                ) : (
                                    goods.map((product) => renderProduct(product))
                                )}
                            </View>
                    </View>
                </View>
            </View>
        </ScrollView>
                <View style={{marginBottom: 47}}>
                    <TabNav navigation={navigation} />
                </View>
            </View>
        </NavigationContainer>
    );
}
