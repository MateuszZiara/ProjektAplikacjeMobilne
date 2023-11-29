import * as React from "react";
import {StyleSheet, View, Text, TextInput, Pressable, ImageBackground} from "react-native";
import { Image } from "expo-image";
import {styles} from "./styles";
import image from "../Login/img/LoginBackground.png";

export function RegisterView({ navigation }) {
    return (
        <View style={styles.ekranRejestracji}>
            <ImageBackground source={image} resizeMode="cover" style={styles.backgroundImage}>
            <Image
                style={styles.ekranRejestracjiChild}
                contentFit="cover"
                source={require("./assets/ellipse-1.png")}
            />
            <Image
                style={styles.ekranRejestracjiChild}
                contentFit="cover"
                source={require("./assets/ellipse-2.png")}
            />
            <View style={styles.iphoneIndicator}>
                <View style={styles.line} />
            </View>
            <View style={[styles.appNameWrapper, styles.buttonPosition]}>
                <View style={styles.appName}>
                    <Text style={[styles.poznajKino, styles.naNowoLayout]}>
                        Poznaj kino
                    </Text>
                    <Text style={[styles.naNowo, styles.naNowoLayout]}>Na nowo</Text>
                </View>
            </View>
            <View style={styles.ekranRejestracjiInner}>
                <View>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Imie i Nazwisko"
                        keyboardType="default"
                        secureTextEntry={true}
                        placeholderTextColor="#fff"
                    />
                    <TextInput
                        style={[styles.TextInput]}
                        placeholder="Adres email"
                        keyboardType="email-address"
                        secureTextEntry={true}
                        placeholderTextColor="#fff"
                    />
                    <TextInput
                        style={[styles.TextInput]}
                        placeholder="Hasło"
                        keyboardType="default"
                        secureTextEntry={true}
                        placeholderTextColor="#fff"
                    />
                </View>
            </View>
            <Text style={styles.maszKontoZaloguj}>Masz konto? Zaloguj się</Text>
            <Pressable style={[styles.button, styles.buttonPosition]}>
                <Text style={styles.startLearning}>Zarejestruj się</Text>
                <Image
                    style={styles.vectorIcon}
                    contentFit="cover"
                    source={require("./assets/vector.png")}
                />
            </Pressable>
            </ImageBackground>
        </View>
    );
}


