import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Gyroscope } from "expo-sensors";
import { styles } from "./styles";
import {Home} from "../Home";
import {Rabat} from "../Rabat";
import Pumpernikiel from "../../Classes/Pumpernikiel";
export function Grzechotnik({ navigation }) {
    const [gyroscopeData, setGyroscopeData] = useState({ x: 0, y: 0, z: 0 });
    const [subscription, setSubscription] = useState(null);
    const [currentImage, setCurrentImage] = useState("macka_lewo");
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [licznik, setLicznik] = useState(1);
    const _slow = () => Gyroscope.setUpdateInterval(1000);
    const _fast = () => Gyroscope.setUpdateInterval(16);
    const [Check, setCheck] = useState("lewo");
    const [xPrev, setxPrev] = useState(0);
    const [yPrev, setyPrev] = useState(0);
    const [zagrzechotaj, setZagrzechotaj] = useState(false);
    const _subscribe = () => {
        setSubscription(

            Gyroscope.addListener(({ x, y, z }) => {
                setGyroscopeData({ x, y, z });
                // Sprawdzanie wartości żyroskopu i ustawianie odpowiedniego obrazu
                if (x >= 1) {
                    setCheck("lewo");
                    setCurrentImage("macka_lewo");
                    if(Pumpernikiel.boolX) {
                        Pumpernikiel.licznik++;
                        Pumpernikiel.boolX = false;
                        Pumpernikiel.boolY = true;
                    }

                    if(Pumpernikiel.licznik === 4)
                    {

                        Pumpernikiel.licznik = 0;
                        _unsubscribe();
                        navigation.navigate(Rabat);
                    }
                } else if (y >= 1) {

                    setCheck("prawo");
                    setCurrentImage("macka_prawo");
                    if(Pumpernikiel.boolY) {
                        Pumpernikiel.boolY = false;
                        Pumpernikiel.boolX = true;
                        Pumpernikiel.licznik++;
                    }

                    if(Pumpernikiel.licznik === 4)
                    {
                        Pumpernikiel.licznik = 0;
                        _unsubscribe();
                        navigation.navigate(Rabat);
                    }
                }
            })
        );
    };

    const _unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
    };

    useEffect(() => {
        // Wywołaj funkcję _subscribe, aby rozpocząć odczyt żyroskopu
        if(!zagrzechotaj)
            _subscribe();

        // Wywołaj funkcję _unsubscribe przy zakończeniu komponentu
        return () => {
            console.log("Unsubscribing gyroscope");
            _unsubscribe();
        };
    }, []); // Pusta tablica dependencies oznacza, że useEffect zostanie wywołany tylko po zamontowaniu komponentu

    const handleZagrzechotajPressIn = () => {

        let xAdd=0;
        let yAdd=0;

        if(Check==="lewo"){
            xAdd = 10;
            setCurrentImage("macka_prawo");
            setCheck("prawo");
            setLicznik((prevLicznik) => prevLicznik + 1);
            if(licznik === 4)
            {
                _unsubscribe();
                setLicznik(0);
                navigation.navigate(Rabat);
            }
        }
        else if (Check==="prawo")
        {
            yAdd=10;
            setCurrentImage("macka_lewo");
            setCheck("lewo");
            setLicznik((prevLicznik) => prevLicznik + 1);
            if(licznik === 4)
            {
                _unsubscribe();
                setLicznik(0);
                navigation.navigate(Rabat);
            }
        }
        setGyroscopeData((prevData) => ({

            x: prevData.x + xAdd,
            y: prevData.y + yAdd,
            z: prevData.z + 0.1,
        }));
    };




    return (
        <View style={styles.container}>
            <Image
                style={styles.image8Icon}
                resizeMode="cover"
                source={require("./assets/image-8.png")}
            />
            <Text style={[styles.grzechotnik, styles.grzechotnikTypo]}>
                Zagrzechotaj telefonem, aby wylosować rabat
            </Text>
            <TouchableOpacity onPress={() => {
                _unsubscribe();
                navigation.navigate(Home);
            }}>
            <Image
                style={styles.backIcon}
                resizeMode="cover"
                source={require("./assets/back.png")}
            />
            </TouchableOpacity>
            <TouchableOpacity onPressIn={handleZagrzechotajPressIn} disabled={buttonDisabled}>

                <Text style={[styles.zagrzechotaj, styles.grzechotnikTypo]}>
                    Zagrzechotaj
                </Text>
            </TouchableOpacity>

            <Text style={styles.text}>Gyroscope:</Text>
            <Text style={styles.text}>x: {
                gyroscopeData.x
            }</Text>
            <Text style={styles.text}>y: {gyroscopeData.y}</Text>
            <Text style={styles.text}>z: {gyroscopeData.z}</Text>

            <Image
                style={styles.mackaImage}
                resizeMode="contain"
                source={images[currentImage]}
            />


        </View>
    );
}

// Zdefiniuj obiekty obrazów
const images = {
    macka_lewo: require("./assets/macka_lewo.png"),
    macka_prawo: require("./assets/macka_prawo.png"),
};
