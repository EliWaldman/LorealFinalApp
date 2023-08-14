import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, Image, SafeAreaView, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Header from '../components/header';
import Ad from '../components/ad';
import Search from '../components/search'; //not in use for lancome
import Back from '../components/back';
import NameAndDescription from '../components/nameanddescription';
import Rating from '../components/rating';
import Price from '../components/price';
import Heart from '../components/heart';
import Carousel from '../components/carousel';
import FontLoader from '../components/fontLoader';
import AddToCart from '../components/addToCart';
import HomepageUGC from '../components/homepageUGC';
import InfoPDP from '../components/infoPDP';

export default function pdpScreen() { //this was PdpScreen before

    return (
      <SafeAreaView style={styles.container}>
          <ScrollView>
            <Ad/>
            <Header/>
  
            <Back/>
            <NameAndDescription/>
            <Rating/>
            <Price/>
            <Heart/>
            <Carousel/>
            <AddToCart/>
            <InfoPDP/>
            <HomepageUGC/>
          </ScrollView>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
  
      },
  });