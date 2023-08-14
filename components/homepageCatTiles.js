import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, Button, Image, Dimensions, useWindowDimensions, } from 'react-native';
import { useFonts } from 'expo-font';

export default function HomepageCatTiles() {

    const [fontsLoaded] = useFonts({
        'PlayfairDisplay': require('../assets/fonts/PlayfairDisplaySC-Regular.ttf')
    })

    if(!fontsLoaded){
        return null;
    }


    return (
        <View style={styles.container}>
            <Text style={styles.text1}>SHOP BY CATEGORY</Text>

            <View style={styles.tileContainer}>

                <View style={styles.imageContainer}>
                    <Image style={[styles.pic1]} source={{uri: 'https://www.lancome-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lancome-us-Library/default/dwe41aed92/HOMEPAGE/2023/06-June/D0528492%20-%20LNCM%20-%20Summer%20Essentials%20-%20Site%20Assets%20-%20HP%20Category%20Tile%20-%20Skincare%20-%20750x750.jpg?sw=240&q=70'}}
                    />
                    <Text style={styles.text2}>SKINCARE</Text>
                </View>
                

                <View style={styles.imageContainer}>
                    <Image style={[styles.pic1]} source={{uri: 'https://www.lancome-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lancome-us-Library/default/dw364eaec9/HOMEPAGE/2023/06-June/D0528492%20-%20LNCM%20-%20Summer%20Essentials%20-%20Site%20Assets%20-%20HP%20Category%20Tile%20-%20Makeup%20-%20750x750.jpg?sw=240&q=70'}}
                    />
                    <Text style={styles.text2}>MAKEUP</Text>
                </View>

            </View>


            <View style={styles.tileContainer}>

                <View style={styles.imageContainer}>
                    <Image style={[styles.pic1]} source={{uri: 'https://www.lancome-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lancome-us-Library/default/dwae320370/HOMEPAGE/2023/06-June/D0528492%20-%20LNCM%20-%20Summer%20Essentials%20-%20Site%20Assets%20-%20HP%20Category%20Tile%20-%20Perfume%20-%20750x750.jpg?sw=240&q=70'}}
                    />
                    <Text style={styles.text2}>FRAGRANCE</Text>
                </View>
                

                <View style={styles.imageContainer}>
                    <Image style={[styles.pic1]} source={{uri: 'https://www.lancome-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lancome-us-Library/default/dw468cc4e3/HOMEPAGE/2023/06-June/D0528492%20-%20LNCM%20-%20Summer%20Essentials%20-%20Site%20Assets%20-%20HP%20Category%20Tile%20-%20Gifts%20-%20750x750.jpg?sw=240&q=70'}}
                    />
                    <Text style={styles.text2}>GIFTS & SETS</Text>
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: 'yellow',
        alignContent: 'center',
        justifyContent: 'center',
        //flexDirection: ''
        //height: 200,
    },

    tileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    
    text1: {
        fontSize: 30,
        //fontWeight: '400',
        textAlign: 'center',
        //padding: 10
        //marginLeft: 12,
        fontFamily: 'PlayfairDisplay',
        marginTop: 30,
        marginBottom: 15,
    },
    
    text2: {
        fontSize: 15,
        fontWeight: '700',
        marginTop: 5
    },

    pic1: {
        height: 170,
        width: 170,
        borderRadius: 10,
        marginTop: 15
    },

    imageContainer: {
        //flexDirection: 'column',
        alignItems: "center"
    }


})