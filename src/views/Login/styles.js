import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    logo: {
        width:300,
        resizeMode: 'contain',
        marginTop: -90,
        marginBottom: 40
    },
    h1b: {
        color: '#fff',
        fontSize: 38,
      //  fontFamily: 'Poppins-SemiBold',
        letterSpacing: 0.63,
        textAlign: 'left',
    },
    h2: {

        color: '#fff',
        fontSize: 30,
       // fontFamily: 'Poppins-Regular',
        fontWeight: '500',
        lineHeight: 30.64,
        letterSpacing: 0.3,
        textAlign: 'left',
    },
    p: {
        color: '#fff',
        fontSize: 20,
       // fontFamily: 'Poppins-Regular',
        fontWeight: '500',
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: -5
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover',
    },

    container: {
        backgroundColor: '#000',
        width: '100%',
        height: '100%',
    },
    button: {
        width: 300,
        height: 75,
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
        fontSize: 30,
    },
    buttonText: {
        color: 'black',
        fontSize: 20,
        //fontFamily: 'Poppins-Medium',
        fontWeight: '500',
        lineHeight: 28.64,
        letterSpacing: 0.63,
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
})