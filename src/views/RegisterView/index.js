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
    const firebaseLinkDoBazy = 'https://aplikacjemobilne-a7987-default-rtdb.europe-west1.firebasedatabase.app/';
    const sciezkaDoBazy = '/users.json';
    const ApiKey = 'AIzaSyB5iaS38Fm9mYfMNaK_HnBqk4V6sp5paJg';
    const LinkZadania = `${firebaseLinkDoBazy}${sciezkaDoBazy}?key=${ApiKey}`;

    const handleRegistration = async () => {
        try {
            // Check if the email already exists in the database
            const checkEmailResponse = await axios.get(
                `https://aplikacjemobilne-ff0b1-default-rtdb.europe-west1.firebasedatabase.app/users.json?orderBy="email"&equalTo="${login}"`
            );

            if (checkEmailResponse.data) {
                // If the response contains data, it means the email already exists
                console.log("Email already exists. Registration failed.");
                // You can display an error message or handle it accordingly
            } else {
                // If the email doesn't exist, proceed with registration
                const registrationResponse = await axios.post(
                    'https://aplikacjemobilne-ff0b1-default-rtdb.europe-west1.firebasedatabase.app/users.json',
                    {
                        email: login,
                        password: password,
                        personal: personal,
                    }
                );

                console.log("Registration successful:", registrationResponse.data);
                // You can add navigation logic or other actions after successful registration
            }
        } catch (error) {
            console.error("Registration failed:", error);
            // Handle the registration failure, e.g., display an error message
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


