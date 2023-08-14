import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, Image, SafeAreaView, Animated, FlatList, ScrollView, color, useWindowDimensions, Pressable } from 'react-native';

export default function SingleProductCLP({ id, imageURL, productName, productBoost, price, amount}) {
    
    return (

        <View style={styles.productContainer}> 

            <Image style={styles.image} source={{uri:imageURL}} />
            <Text style={styles.productName}>{productName}</Text>
            <Text style={styles.productBoost}>{productBoost}</Text>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.amount}>{amount}</Text>
            <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>ADD TO CART</Text>
            </Pressable>
        
        </View>
    );
}

const styles = StyleSheet.create ({

    productContainer: {
        //backgroundColor: 'yellow',
        height: 420,
        //flex: .9,
        width: 180,
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        height: 200,
        width: 200,
        //marginLeft: 50,
        //backgroundColor: 'red'
        //justifyContent: 'center',
        //alignContent: 'center',

    },

    productName: {
        fontSize: 15,
        //textAlign: 'center',
        //justifyContent: 'center',
        alignItems: 'center',
        //flexDirection: 'row'
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 25,
    },

    productBoost: {
        fontSize: 13,
        textAlign: 'center',
        marginTop: 10,
        color: 'gray'
    },

    price: {
        //color: 'green',
        textAlign: 'center',
        marginTop: 10
    },

    amount: {
        //color: 'red',
        textAlign: 'center',
        marginTop: 10
    },

    button: {
        borderRadius: 10,
        backgroundColor: 'black',
        width: 150,
        height: 50,
        marginTop: 25
    },

    buttonText: {
        color: 'white',
        textAlign: 'center',
        marginTop: 15


    }

})