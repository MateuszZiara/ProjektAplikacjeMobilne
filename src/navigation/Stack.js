import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Login} from "../views/Login";
import {LoginView} from "../views/LoginView";
import {RegisterView} from "../views/RegisterView";
import {Bilety2} from "../views/Bilet2";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Bilety1} from "../views/Bilety1";
import * as React from "react";
import TabNav from '../navigation/Tab'
import {Test} from "../views/test";
import {Przekaski2View} from "../views/Przekaski2";



const Stack = createNativeStackNavigator();
const optionScreen = {
    headerShown: false
}

export default function StackNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={optionScreen} />
            <Stack.Screen name="LoginView" component={LoginView} options={optionScreen} />
            <Stack.Screen name="RegisterView" component={RegisterView} options={optionScreen} />
            <Stack.Screen name="Bilety2" component={Bilety2} options={optionScreen} />
            <Stack.Screen name="Przekaski2View" component={Przekaski2View} options={optionScreen} />
            <Stack.Screen name="TabNav" component={TabNav} options={optionScreen} />
            <Stack.Screen name="Test" component={Test} options={optionScreen} />


        </Stack.Navigator>

    );
}