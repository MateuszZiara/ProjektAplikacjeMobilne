import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Login} from "../views/Login";
import {LoginView} from "../views/LoginView";
import {RegisterView} from "../views/RegisterView";
import * as React from "react";
import TabNav from '../navigation/Tab'
import {Test} from "../views/test";
import {Przekaski2View} from "../views/Przekaski2";
import {Bilety2_vip} from "../views/Bilety2_vip";
import {Bilety3_vip} from "../views/Bilety3_vip";
import {UstawieniaView} from "../views/Ustawienia";
import {RepertuarView} from "../views/Repertuar";
import {Bilety4_vip} from "../views/Bilety4_vip";
import {SzczegolyKonta} from "../views/SzczegolyKonta";



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
            <Stack.Screen name="Bilety2_vip" component={Bilety2_vip} options={optionScreen} />
            <Stack.Screen name="Bilety3_vip" component={Bilety3_vip} options={optionScreen} />
            <Stack.Screen name="Bilety4_vip" component={Bilety4_vip} options={optionScreen} />
            <Stack.Screen name="Przekaski2View" component={Przekaski2View} options={optionScreen} />
            <Stack.Screen name="TabNav" component={TabNav} options={optionScreen} />
            <Stack.Screen name="Test" component={Test} options={optionScreen} />
            <Stack.Screen name="UstawieniaView" component={UstawieniaView} options={optionScreen} />
            <Stack.Screen name="SzczegolyKonta" component={SzczegolyKonta} options={optionScreen} />
            <Stack.Screen name="RepertuarView" component={RepertuarView} options={optionScreen} />


        </Stack.Navigator>

    );
}