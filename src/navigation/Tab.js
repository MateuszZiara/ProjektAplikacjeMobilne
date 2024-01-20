import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from "../views/Home";
import { BottomTabIcon } from "../components/BottomTabIcon";
import { PrzekaskiView } from "../views/Przekaski";
import { Bilety1 } from "../views/Bilety1";
import { RepertuarView } from "../views/Repertuar";
import { Koszyk } from "../views/Koszyk";
import {TouchableWithoutFeedback, View} from "react-native";

const optionScreen = {
    headerShown: false,
    tabBarShowLabel: false
}

const Tab = createBottomTabNavigator();

export default function TabNav({ navigation }) {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
                return <BottomTabIcon routeName={route?.name} focused={focused} navigation={navigation} />;
            },
            tabBarStyle: { backgroundColor: 'black' },
            tabBarButton: props => (
                <TabBarButton {...props} navigation={navigation} />
            ),
        })}>
            <Tab.Screen name="Home" component={Home} options={optionScreen} />
            <Tab.Screen name="PrzekaskiView" component={PrzekaskiView} options={optionScreen} />
            <Tab.Screen name="Bilety1" component={Bilety1} options={optionScreen} />
            <Tab.Screen name="RepertuarView" component={RepertuarView} options={optionScreen} />
            <Tab.Screen name="Koszyk" component={Koszyk} options={optionScreen} />
        </Tab.Navigator>
    );
}

// Custom TabBarButton component
function TabBarButton({ children, onPress, navigation, ...props }) {
    return (
        <TouchableWithoutFeedback onPress={() => {
            const routeName = props.to?.split('/').pop();
            console.log(routeName);
            navigation.navigate(routeName);
            if (onPress) {
                onPress();
            }
        }}>
            <View {...props}>
                {children}
            </View>
        </TouchableWithoutFeedback>
    );
}
