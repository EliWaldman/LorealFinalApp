import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, Image, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Ad from '../components/ad';
import Carousel from '../components/carousel';
import Header from '../components/header';
import HomepageAds from '../components/homepageAds';
import HomepageBottomPics from '../components/homepageBottomPics';
import HomepageCatTiles from '../components/homepageCatTiles';
import HomepageProductsCarousel from '../components/homepageProductsCarousel';
import HomepageUGC from '../components/homepageUGC';
import Search from '../components/search';

export default function Home({ navigation }) {

    

    const pressHandler1 = () => {
        navigation.navigate('PdpScreen')
        //navigation.push('PdpScreen')
    }

    const presshandler2 =() => {
        navigation.navigate('ClpScreen')
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Ad/>
                <Header/>

                <HomepageAds/>
                <HomepageCatTiles/>
                <HomepageProductsCarousel/>
                <HomepageUGC/>
                <HomepageBottomPics/>

                <Button title='go to pdp page' onPress={pressHandler1}/>
                <Button title='go to clp page' onPress={presshandler2}/>
            </ScrollView>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      //alignItems: "flex-start",
      //justifyContent: 'center',
      //flexDirection: 'row',
      //padding: 15
  
    },

    text: {
        color: 'black',
        //marginTop: 12,
    }

});