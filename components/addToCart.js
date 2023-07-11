import React, {useState } from "react";
import { Text, View, StyleSheet, Button, Image, SafeAreaView, Pressable } from 'react-native';

export default function AddToCart() {

    const [count, setCounter] = useState(1)

    return (
        <View style={styles.container}>

            <View style={styles.quantBox}>
                <Pressable style={styles.buttonMinus} onPress={() => setCounter(count - 1)}>
                    <Text>-</Text>
                </Pressable>
                <Text style={styles.text}>{count}</Text>
                <Pressable style={styles.buttonPlus} onPress={() => setCounter(count + 1)}>
                    <Text>+</Text>
                </Pressable>
            </View>



            <View style={styles.buyBox}>
                <Text style={styles.price}>${count * 35}.00 - ADD TO CART</Text>
                
            </View>
        </View>
    );

}

const styles =StyleSheet.create ({
    
    container: {
        //padding: 20,
        backgroundColor: 'yellow',
        flexDirection: 'row',
        //justifyContent: 'space-around'
        //marginTop: 15
    
    },

    quantBox: {
        flexDirection: 'row',
        borderRadius: 4,
        borderWidth: 2,
        padding: 10,
        borderColor: 'gray',
        marginLeft: 15,
        marginRight: 5,

    },

    buttonMinus: {
        //padding: 15,
        //borderWidth: 5,
        borderColor: 'yellow',
        marginLeft: 10,
        marginRight: 20,

    },

    buttonPlus: {
        //padding: 15,
        //borderWidth: 5,
        borderColor: 'yellow',
        marginLeft: 20,
        marginRight: 10,

    },

    text: {
        fontSize: 15,
        //textAlign: "center"
    },

    buyBox: {
        flexDirection: 'row',
        borderRadius: 4,
        borderWidth: 2,
        padding: 10,
        borderColor: '#e40072',
        backgroundColor: '#e40072'
    },

    price: {
        fontSize: 15,
        marginLeft: 30,
        marginRight: 30,
        color: 'white',

    }

});