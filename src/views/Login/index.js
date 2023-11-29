
import {View, Text, Image,  TouchableOpacity, ImageBackground,} from 'react-native';
import {styles} from "./styles";
import {LoginView} from "../LoginView";
const image = require('./img/LoginBackground.png');


//TODO Fontsiki :)


export function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.backgroundImage}>
                <Image source={require('./img/Logo.png')} style={styles.logo} />
                <Text style={styles.h2}>Twoje ulubione</Text>
                <Text style={styles.h1b}>Kino </Text>
                <Text style={styles.p}>Przeglądaj repertuar dowolnego kina w jednej aplikacji. Bez zbędnego chaosu.</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(LoginView)}>
                    <Text style={styles.buttonText}>Zaloguj/Zarejestruj się</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Kontynuuj bez rejestracji</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}
