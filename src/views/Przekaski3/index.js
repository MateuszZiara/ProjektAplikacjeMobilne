import * as React from "react";
import {useEffect, useState} from "react";
import {Image} from "expo-image";
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {styles} from "../Przekaski2/styles"
import {styles2, styles3} from "./styles"
import {UserAvatar} from "../../components/UserAvatar";
import axios from "axios";
import Cart from "../../Classes/Cart";

export function Przekaski3View({navigation, route}) {
    function sub() {
        if (number === 0) {
            return;
        } else {
            setNumber(number - 1);
        }
    }
    function add() {
        if (number === 19) {
            return;
        } else {
            setNumber(number + 1);
        }
    }
    const [error, setError] = useState(false);
    const [number, setNumber] = useState(0);
    const firebaseURL = "https://aplikacjemobilne-ff0b1-default-rtdb.europe-west1.firebasedatabase.app";
    const [goods, setGoods] = useState([]);
    const name = route.params && route.params.param === 0 ? "Przekąski" : "Napoje";
    const param = route.params.param;
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
        11: require('../../images/products/malypopcornk.png'),
        12: require('../../images/products/duzypopcornk.png'),
    };

    const imagesDrink = {
        1: require('../../images/products/sokjabl.png'),
        2: require('../../images/products/sokpoma.png'),
        3: require('../../images/products/sokwiel.png'),
        4: require('../../images/products/woda.png'),
        5: require('../../images/products/coca.png'),
        6: require('../../images/products/coca.png'),
        7: require('../../images/products/fanta.png'),
        8: require('../../images/products/sprite.png'),
        9: require('../../images/products/lipton.png'),
        10: require('../../images/products/redbull.png'),
    };
    const images = param === 0 ? imagesFood : imagesDrink;

    function addToCart() {
        if (number > 0) {


            let added = false;

            for (let i = 0; i < Cart.array.length; ++i) {
                if (Cart.array[i].id === route.params.id) {
                    Cart.array[i].amount += number;
                    added = true;
                    break;
                }
            }

            if (!added) { //TODO Poprawić żeby się stackowały
                Cart.array.push({
                    id: route.params.itemid,
                    img: images[route.params.itemid],
                    amount: number,
                    name: productData.name
                });

            }
        }
    }


    const [productData, setProductData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${firebaseURL}/przekaski/${diff}/${route.params.itemid - 1}.json`);
                setProductData(response.data);
                console.log(response.data);
                console.log(route.params.itemid);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(true);
            }
        };

        fetchData();
    }, [route.params.itemid, diff]);

    const renderProduct = () => {
        if (error) {
            return <Text>Error fetching data</Text>;
        }

        if (!productData) {
            return <Text>No product data available</Text>;
        }

        const imageKey = productData.id.toString();
        const images = param === 0 ? imagesFood : imagesDrink;

        return (
            <View style={[styles3.biletVipParent, styles3.parentBg]}>
                <Text style={[styles3.biletVip, styles3.zTypo]}>
                    {
                        productData.name
                    }

                </Text>
                <Text style={[styles3.z, styles3.zTypo]}>{productData.price} zł</Text>
                <Image
                    style={styles3.maskGroupIcon2}
                    contentFit="cover"
                    source={images[imageKey]}
                />

                <View style={[styles3.parent, styles3.parentBg]}>
                    <TouchableOpacity onPress={() => sub()}>
                        <View style={styles3.view}>
                            <LinearGradient
                                style={[styles3.child, styles3.childPosition]}
                                locations={[0, 1]}
                                colors={["rgba(252, 252, 252, 0.2)", "rgba(123, 122, 122, 0.2)"]}
                            />
                            <Text style={[styles3.text1, styles3.textTypo]}>-</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={[styles3.counter, styles3.view1ShadowBox]}>
                        <View style={[styles3.counterChild, styles3.childPosition]}/>
                        <Text style={[styles3.text2, styles3.textTypo]}
                              onChangeText={value => onChangeText(value)}>{number}</Text>
                    </View>
                    <TouchableOpacity onPress={() => add()}>
                        <View style={[styles3.view1, styles3.view1ShadowBox]}>
                            <LinearGradient
                                style={[styles3.child, styles3.childPosition]}
                                locations={[0, 1]}
                                colors={["rgba(136, 243, 28, 0.2)", "rgba(82, 158, 5, 0.2)"]}
                            />

                            <Text style={[styles3.text3, styles3.textTypo]}>+</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (<ScrollView>
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
                            colors={["rgba(0, 0, 0, 0.5)", "rgba(255, 255, 255, 0)", "rgba(0, 0, 0, 0.5)",]}
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

                        <View style={{left: -5}}>
                            <UserAvatar style={{zIndex: '0'}} navigation={navigation}/>
                        </View>
                    </View>
                </View>
                <View style={[styles.backParent, styles.parentFlexBox]}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
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
                {renderProduct()}

                <View style={[styles2.rectangleParent, styles2.parentPosition]}>
                    <LinearGradient
                        style={styles2.frameItem}
                        locations={[0, 1]}
                        colors={["rgba(22, 244, 44, 0.2)", "rgba(82, 158, 5, 0.2)"]}
                    />
                    <TouchableOpacity onPress={addToCart} style={[styles2.garyLeeParent, styles2.parentFlexBox]}>
                        <Text style={[styles2.garyLee, styles2.garyLeeTypo]}>
                            Dodaj do zamówienia
                        </Text>
                        <Image
                            style={styles2.maskGroupIcon}
                            contentFit="cover"
                            source={require("./assets/mask-group.png")}
                        />
                    </TouchableOpacity>
                </View>


            </View>
        </View>
    </ScrollView>);
}
