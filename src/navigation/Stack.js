import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Login} from "../views/Login";
import {LoginView} from "../views/LoginView";
import {RegisterView} from "../views/RegisterView";




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
        </Stack.Navigator>

    );
}