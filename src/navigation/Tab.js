import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home} from "../views/Home";
import {BottomTabIcon} from "../components/BottomTabIcon";
import {PrzekaskiView} from "../views/Przekaski";
import {Bilety1} from "../views/Bilety1";
import {RepertuarView} from "../views/Repertuar";
import {Koszyk} from "../views/Koszyk";

const optionScreen = {
    headerShown: false,
    tabBarShowLabel: false
}

//TODO referencja do tabnav w app.js aby móc przekazać tab do innych okien nie będących tu dodanych

const Tab = createBottomTabNavigator();

export default function TabNav() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, }) => {

                return <BottomTabIcon routeName={route?.name} focused={focused} />;
            },
            tabBarStyle: {backgroundColor: 'black'}
        })}>
            <Tab.Screen name="Home" component={Home} options={optionScreen} />
            <Tab.Screen name="PrzekaskiView" component={PrzekaskiView} options={optionScreen} />
            <Tab.Screen name="Bilety1" component={Bilety1} options={optionScreen} />
            <Tab.Screen name="RepertuarView" component={RepertuarView} options={optionScreen} />
            <Tab.Screen name="Koszyk" component={Koszyk} options={optionScreen} />
        </Tab.Navigator>
    );
}
