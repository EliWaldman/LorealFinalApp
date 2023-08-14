import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, Button, Image, Dimensions, useWindowDimensions, } from 'react-native';

export default function HomepageBottomPics() {
    return (
        <View>
            <Image style={[styles.pic1]} source={{uri: 'https://www.lancome-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lancome-us-Library/default/dwe47142ec/HOMEPAGE/2023/06-June/LVEB-Iris-Absolu-Whats-New-Mobile.jpg?sw=1184&sh=1184&sm=cut&sfrm=jpg&q=70'}}
            />
            <Image style={[styles.pic2]} source={{uri: 'https://www.lancome-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lancome-us-master-catalog/default/dw76e9a59d/pdp/00751-LAC/lan_dmi_frag_lveb-iris-absolu-50ml_3614273922968_packshot-1000x1000.jpg?sw=1139&sfrm=jpg&q=70'}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    pic1: {
        height: 370,
        width: 400
    },

    pic2: {
        width: 400,
        height: 370

    }

})