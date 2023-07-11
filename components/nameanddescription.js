import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, Image, SafeAreaView, TextInput } from 'react-native';
import * as Font from 'expo-font';
import { assets } from '../react-native.config';
import { useFonts } from 'expo-font';


export default function NameAndDescription() {

    const [fontsLoaded] = useFonts({
        'PlayfairDisplay': require('../assets/fonts/PlayfairDisplaySC-Regular.ttf')
    })

    if(!fontsLoaded){
        return null;
    }



    return (
        <View style={styles.container}>
            <Text style={styles.title}>L'ABSOLU ROUGE INTIMATTE LIPSTICK</Text>
            <Text style={styles.description}>12 HR COMFORT & SOFT MATTE FINISH</Text>
        </View>
    );

    
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: "yellow",
        //justifyContent: 'space-evenly',
        //alignItems: 'center',
        //flexDirection: 'row'
        //padding: 50

    },
    
    title: {
        fontSize: 30,
        //fontWeight: '400',
        textAlign: 'left',
        //padding: 10
        marginLeft: 12,
        fontFamily: 'PlayfairDisplay'
        
    },

    description: {
        fontSize: 13,
        fontWeight: '300',
        textAlign: 'left',
        marginTop: 6,
        marginLeft: 12
    }
})