import * as Font from 'expo-font';
import React, {useState} from 'react';
import NameAndDescription from './nameanddescription';
import { AppLoading } from 'expo';



const getFonts = () => Font.loadAsync({
    //'playfair-light': require('../assets/fonts/PlayfairDisplaySC-Regular.ttf')
    // other fonts here
});

export default function FontLoader() {
    
    const [fontsLoaded, setFontsLoaded] = useState('false');
    
    if(fontsLoaded) {
        return (
            <NameAndDescription />
        );
    } else {
        return (
            <AppLoading
            startAsync={getFonts}
            onFinish={() => setFontsLoaded(true)}
            />
        )
    }

}