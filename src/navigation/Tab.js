import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home} from "../views/Home";
import {BottomTabIcon} from "../components/BottomTabIcon";
import {PrzekaskiView} from "../views/Przekaski";


const optionScreen = {
    headerShown: false,
    tabBarShowLabel: false
}

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
        </Tab.Navigator>
    );
}
