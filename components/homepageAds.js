import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, Button, Image, Dimensions, useWindowDimensions, } from 'react-native';

export default function HomepageAds() {
    return (
        <View>
            <Image style={[styles.bigAd]} source={{uri: 'https://www.lancome-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lancome-us-Library/default/dwbd543376/HOMEPAGE/2023/06-June/D0528492-LNCM-SummerEssentials-SiteAssets-HPHeroBanner-592x592.jpg?sw=480&sh=480&sm=cut&q=70'}}
            />
            <Image style={[styles.smallAd]} source={{uri: 'https://www.lancome-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lancome-us-Library/default/dwa399a2fa/HOMEPAGE/2023/07-July/D0558164-JULYGWP-480x170-3.jpg?sw=480&sh=170&sm=cut&q=70'}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    bigAd: {
        backgroundColor: 'yellow',
        height: 400
    },

    smallAd: {
        backgroundColor: 'orange',
        height: 130,
        marginTop: 5
    }
});