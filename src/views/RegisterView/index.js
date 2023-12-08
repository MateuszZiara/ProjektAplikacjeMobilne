import * as React from "react";
import {StyleSheet, View, Text, TextInput, Pressable, ImageBackground} from "react-native";
import { Image } from "expo-image";
import {styles} from "./styles";
import image from "../Login/img/LoginBackground.png";
import {LoginView} from "../LoginView";
import {useState} from "react";
import axios from "axios";

export function RegisterView({ navigation }) {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [personal, setPersonal] = useState("");
    const handleRegistration = async () => {
        try {
            const response = await axios.post('http://192.168.100.162:3000/users', {
                login,
                password,
                personal,
            });

            console.log('Registration successful:', response.data);

            navigation.navigate(LoginView);
        } catch (error) {

            console.error('Registration failed:', error.message);
        }
    };
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
                        value={personal}  onChangeText={(text) => setPersonal(text)}
                        placeholder="Imie i Nazwisko"
                        keyboardType="default"
                        placeholderTextColor="#fff"
                    />
                    <TextInput
                        style={[styles.TextInput]}
                        placeholder="Adres email"
                        value={login}  onChangeText={(text) => setLogin(text)}
                        keyboardType="email-address"
                        placeholderTextColor="#fff"
                    />
                    <TextInput
                        style={[styles.TextInput]}
                        value={password}  onChangeText={(text) => setPassword(text)}
                        placeholder="Hasło"
                        keyboardType="default"
                        secureTextEntry={true}
                        placeholderTextColor="#fff"
                    />
                </View>
            </View>
            <Text style={styles.maszKontoZaloguj} onPress={() => navigation.navigate(LoginView)}>Masz konto? Zaloguj się</Text>
            <Pressable style={[styles.button, styles.buttonPosition]} onPress={handleRegistration}>
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


