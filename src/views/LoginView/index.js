import * as React from "react";
import {StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import {styles} from "./styles"
import {useState} from "react";
import axios from "axios";
import image from "../Login/img/LoginBackground.png";
import {RegisterView} from "../RegisterView";
import TabNav from "../../navigation/Tab";
import Singleton from "../../Classes/User"
export function LoginView({ navigation }) {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError] = useState(false);
    const handleLogin = async () => {
        try {
            const response = await axios.get("http://192.168.100.162:3000/users");
            const users = response.data;
            const user = users.find((user) => user.login === login && user.password === password);
            if (user) {
                Singleton.setNameAndId(user.personal,user.id);
                console.log("ZAJEBISCIE");
                setError(false);
                navigation.navigate(TabNav);
            } else {
                setError(true);
            }
        }catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    return (
        <ScrollView>
        <View style={styles.ekranLogowania}>
            <ImageBackground source={image} resizeMode="cover" style={styles.backgroundImage}>
            <View style={styles.frame}>
                <Image
                    style={styles.frameIcon}
                    contentFit="cover"
                    source={require("./assets/frame.png")}
                />
                <Image
                    style={styles.frameIcon1}
                    contentFit="cover"
                    source={require("./assets/frame1.png")}
                />
                <View style={styles.frame2}>
                    <View style={styles.appNameWrapper}>
                        <View style={styles.appName}>
                            <Text style={styles.witaj}>Witaj</Text>
                            <Text style={styles.ponownie}>Ponownie</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.frame3}>
                    {error ? <Text style={styles.error}>Twój email lub hasło są nieprawodłowe</Text> : null}
                    <View style={styles.frameView}>
                        <View style={styles.fieldParent}>
                            <View style={styles.field}>
                                <View style={styles.frame4}>
                                    <TextInput style={styles.adresEmail} placeholder="Adres Email" placeholderTextColor={'white'} value={login} onChangeText={(text) => setLogin(text)}></TextInput>
                                    <Image
                                        style={styles.emailicon}
                                        contentFit="cover"
                                        source={require("./assets/emailicon.png")}
                                    />
                                </View>
                                <Image
                                    style={styles.fieldChild}
                                    contentFit="cover"
                                    source={require("./assets/vector-1.png")}
                                />
                            </View>
                            <View style={styles.field1}>
                                <View style={styles.frame4}>
                                    <TextInput style={styles.adresEmail} placeholder="Hasło" placeholderTextColor={'white'} value={password}  onChangeText={(text) => setPassword(text)} secureTextEntry></TextInput>
                                    <Image
                                        style={styles.emailicon}
                                        contentFit="cover"
                                        source={require("./assets/lockicon.png")}
                                    />
                                </View>
                                <Image
                                    style={styles.fieldChild}
                                    contentFit="cover"
                                    source={require("./assets/vector-1.png")}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.frame6}>
                <View style={styles.frame7}>
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Zaloguj się</Text>
                    </TouchableOpacity>
                    <Text style={styles.niePosiadaszKonta} onPress={() => navigation.navigate(RegisterView)}>
                        Nie posiadasz konta? Zarejestruj się
                    </Text>
                </View>
                <View style={styles.iphoneIndicator}>
                    <View style={styles.line} />
                </View>
            </View>
            </ImageBackground>
        </View>
        </ScrollView>
    );
};