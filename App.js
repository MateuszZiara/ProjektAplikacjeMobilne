import { NavigationContainer } from '@react-navigation/native';
import StackNav from "./src/navigation/Stack";
import {LogBox, View} from 'react-native';
import {useCallback} from "react";
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from "expo-font";



export default function App() {
    const [fonts] = useFonts ({
        poppins400: require('.//assets/fonts/Poppins-Regular.ttf'),
        poppins500: require('.//assets/fonts/Poppins-Medium.ttf'),
        poppins600: require('.//assets/fonts/Poppins-SemiBold.ttf'),
    });


    LogBox.ignoreLogs(['Warning: ...']);
    LogBox.ignoreAllLogs();

    const LoadFonts = useCallback(async  ()=>{
        if(fonts){
            await SplashScreen.hideAsync();
        }
    }, [fonts]);
    if(!fonts){
        return null;
    }


  return (
      <NavigationContainer onLayout={LoadFonts}>
        <StackNav />
      </NavigationContainer>
  );
}

