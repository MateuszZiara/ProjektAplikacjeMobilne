import React from 'react';
import { Avatar } from 'react-native-paper';
import { View, TouchableOpacity } from 'react-native';
import Singleton from '../Classes/User';
import {StyleSheet} from "react-native";
import { useNavigation } from '@react-navigation/native';

function stringAvatar(name) {
    if (name && name !== '') {
        name = name.toUpperCase();
        return name.split(0,1);
    } else {
        return '?';
    }
}

function ImgOrSymbolic() {
    if (Singleton.name === null || Singleton.name === undefined) {
        return <Avatar.Text size={71} label="?" />;
    } else {
        return <Avatar.Text size={71} label={stringAvatar(Singleton.name)} />;
    }
}



export const UserAvatar = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={style2.vectorWrapper}
            onPress={() => {
                Singleton.name === null
                    ? navigation.navigate('Login')
                    : navigation.navigate('UstawieniaView');
            }}
        >
            <View style={style2.frameChild}>
                <ImgOrSymbolic />
            </View>
        </TouchableOpacity>
    );
};

const style2 = StyleSheet.create({
    frameChild: {
        width: 71,
        height: 71,
    },
    vectorWrapper: {
        borderRadius: 50,
        borderStyle: "solid",
        borderColor: "rgba(255, 255, 255, 0.14)",
        borderWidth: 4,
        marginLeft: 20,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
    }
});


