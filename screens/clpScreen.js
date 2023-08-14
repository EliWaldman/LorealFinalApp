import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, Image, SafeAreaView, FlatList, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import VertCarousel from '../components/CLP/vertCarousel';
import Header from '../components/header';
import Ad from '../components/ad';
import Back from '../components/back';
import UgcCLP from '../components/CLP/ugcCLP';


export default function ClpScreen() {

  const [fontsLoaded] = useFonts({
    'PlayfairDisplay': require('../assets/fonts/PlayfairDisplaySC-Regular.ttf')
})

if(!fontsLoaded){
    return null;
}

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Ad />
          <Header />
          <Back />
          <Text style={styles.bestsellers}>OUR BESTSELLERS</Text>
          <UgcCLP/>
          <VertCarousel />

        </ScrollView>

      </SafeAreaView>

    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
  
      },

    bestsellers: {
      fontSize: 30,
      fontFamily: 'PlayfairDisplay',
      marginTop: 10,
      marginBottom: 20,
      textAlign: 'center'

      },

  });