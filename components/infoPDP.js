import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput, Pressable, FlatList } from 'react-native';
import SingleInfoPDP from './singleInfoPDP';

export default function InfoPDP() {

    const productInfo = [
        
        {
            id: '1',
            title: 'Description',
            blurb: "Our NEW L'Absolu Rouge Intimatte is a soft matte lipstick with a buildable, lightweight and comfortable formula that glides effortlessly onto lips. Enriched with caring ingredients, our formula also includes grand rose extract and ceramides for hydration and lasting comfort for up to 12 hours. Available in up to 12 beautiful lipstick shades, the petal shaped bullet allows for ease of application for a beautiful soft matte color in one swipe. L'Absolu Rouge Intimatte is your perfect lipstick for a pop of color to add to your everyday look or special occasion."
        },

        {
            id: '2',
            title: 'Benefits',
            blurb: "Up to 12H hydration, Soft Matte Finish, Contains Ceramides & Grand Rose Extracts, Long-wearing"
        },

        {
            id: '3',
            title: 'How to Apply',
            blurb: "Apply lip color in a single stroke for intense color payoff, For the perfect result, apply lip color to your lips from the center outward, Blot any excess product",

        },

        {
            id: '4',
            title: 'Ingredients',
            blurb: "Ceramides: Lasting comfort for up to 12H, Grand Rose Extracts: Hydration and moisture"
        }
    ];

    const renderProductInfo = ({ item }) => (
        <SingleInfoPDP
            id={item.id}
            title={item.title}
            blurb={item.blurb}
        />
    )

    
    return (
        <View style={styles.container}>
            <FlatList
            data={productInfo}
            renderItem={(item) => renderProductInfo(item)}
            keyExtractor={(item) => item.id}
            pagingEnabled
            />

        </View>
    )
    
}


const styles = StyleSheet.create({

    container: {
        backgroundColor: 'pink',
        height: 500
    },

  

    dView: {
        backgroundColor: 'green',
        height: 50
    }
})