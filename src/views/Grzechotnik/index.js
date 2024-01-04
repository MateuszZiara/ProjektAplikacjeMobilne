import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Gyroscope } from "expo-sensors";
import { styles } from "./styles";

export function Grzechotnik({ navigation }) {
    const [gyroscopeData, setGyroscopeData] = useState({ x: 0, y: 0, z: 0 });
    const [subscription, setSubscription] = useState(null);
    const [currentImage, setCurrentImage] = useState("macka_lewo");
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const _slow = () => Gyroscope.setUpdateInterval(1000);
    const _fast = () => Gyroscope.setUpdateInterval(16);
    const [Check, setCheck] = useState('');

    const _subscribe = () => {
        setSubscription(
            Gyroscope.addListener(({ x, y, z }) => {
                setGyroscopeData({ x, y, z });

                // Sprawdzanie wartości żyroskopu i ustawianie odpowiedniego obrazu
                if (x >= 1) {
                    setCheck("lewo");
                    setCurrentImage("macka_lewo");
                } else if (y >= 1) {
                    setCheck("prawo");
                    setCurrentImage("macka_prawo");
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
        _subscribe();

        // Wywołaj funkcję _unsubscribe przy zakończeniu komponentu
        return () => {
            _unsubscribe();
        };
    }, []); // Pusta tablica dependencies oznacza, że useEffect zostanie wywołany tylko po zamontowaniu komponentu

    const handleZagrzechotajPressIn = () => {
        let xAdd=0;
        let yAdd=0;
        if(Check==="lewo"){
            xAdd=10;
        }
        else if (Check==="prawo")
        {
            yAdd=10;
        }

        setGyroscopeData((prevData) => ({

            x: prevData.x + xAdd,
            y: prevData.y + yAdd,
            z: prevData.z + 0.1,
        }));
    };

    const handleZagrzechotajPressOut = () => {
        _unsubscribe();
    };

    const handleZagrzechotajClick = () => {
        if (!buttonDisabled) {
            setButtonDisabled(true);
            _subscribe();
            setTimeout(() => {
                setButtonDisabled(false);
                _unsubscribe();
            }, 5000); // Blokada na 5 sekund
        }
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
            <Image
                style={styles.backIcon}
                resizeMode="cover"
                source={require("./assets/back.png")}
            />

            <TouchableOpacity
                onPressIn={handleZagrzechotajPressIn}
                onPress={handleZagrzechotajClick}
                disabled={buttonDisabled}>

                <Text style={[styles.zagrzechotaj, styles.grzechotnikTypo]}>
                    Zagrzechotaj
                </Text>
            </TouchableOpacity>

            <Text style={styles.text}>Gyroscope:</Text>
            <Text style={styles.text}>x: {gyroscopeData.x}</Text>
            <Text style={styles.text}>y: {gyroscopeData.y}</Text>
            <Text style={styles.text}>z: {gyroscopeData.z}</Text>

            <Image
                style={styles.mackaImage}
                resizeMode="contain"
                source={images[currentImage]}
            />

            <View style={styles.grzechotnik}>
                <TouchableOpacity onPress={() => (subscription ? _unsubscribe() : _subscribe())}>
                    <View style={styles.button}>
                        <Text>{subscription ? "Off" : "On"}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

// Zdefiniuj obiekty obrazów
const images = {
    macka_lewo: require("./assets/macka_lewo.png"),
    macka_prawo: require("./assets/macka_prawo.png"),
};
