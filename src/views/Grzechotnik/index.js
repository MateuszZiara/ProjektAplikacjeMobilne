import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Gyroscope } from "expo-sensors";
import { styles } from "./styles";

export function Grzechotnik({ navigation }) {
    const [{ x, y, z }, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
    });
    const [subscription, setSubscription] = useState(null);

    const _slow = () => Gyroscope.setUpdateInterval(1000);
    const _fast = () => Gyroscope.setUpdateInterval(16);

    const _subscribe = () => {
        setSubscription(
            Gyroscope.addListener((gyroscopeData) => {
                setData(gyroscopeData);
            })
        );
    };

    const _unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
    };

    const handleZagrzechotajPressIn = () => {

        setData((prevData) => ({
            x: prevData.x + 1,
            y: prevData.y + 1,
            z: prevData.z + 1,
        }));

        _subscribe();
    };

    const handleZagrzechotajPressOut = () => {
        _unsubscribe();
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
                onPressOut={handleZagrzechotajPressOut}
            >
                <Text style={[styles.zagrzechotaj, styles.grzechotnikTypo]}>
                    Zagrzechotaj
                </Text>
            </TouchableOpacity>

            <Text style={styles.text}>Gyroscope:</Text>
            <Text style={styles.text}>x: {x}</Text>
            <Text style={styles.text}>y: {y}</Text>
            <Text style={styles.text}>z: {z}</Text>
            <View style={styles.grzechotnik}>
                <TouchableOpacity onPress={() => (subscription ? _unsubscribe() : _subscribe())}>
                    <View style={styles.button}>
                        <Text>{subscription ? 'Off' : 'On'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={_slow}>
                    <View style={styles.button}>
                        <Text>Slow</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={_fast}>
                    <View style={styles.button}>
                        <Text>Fast</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
