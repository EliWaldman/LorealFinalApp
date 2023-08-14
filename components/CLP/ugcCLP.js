import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, Image, SafeAreaView, Animated, FlatList, ScrollView, color, useWindowDimensions, Pressable } from 'react-native';
import { Video } from 'expo-av';
//import tiktok1 from './assets/videos/tiktok1.mp4';

export default function UgcCLP() {
    
    const video = React.useRef(null);



    return (
        <View style={styles.container}>
            <Image style={[styles.promo]} source={{uri: 'https://www.lancome-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lancome-us-Library/default/dweb7551ce/images/plp/pushes/LU14389_MembersDay_CLPTile_LoggeOut_CTA_Mobile.jpg?sw=320&q=70'}}
            />
            <Video 
                source={{uri: 'https://assets.mixkit.co/videos/preview/mixkit-model-girl-posing-on-a-white-background-34428-large.mp4'}}
                //source={require("../assets/videos/tiktok1.mp4")}
                style={styles.video}
                isLooping
                useNativeControls
            />
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        //height: 100,
        backgroundColor: 'yellow',
        flexDirection: 'row',
        //flex: 1
    },

    promo: {
        height: 400,
        width: 170,
        
    },
    
    video: {
        height: 400,
        width: 225
    }
})