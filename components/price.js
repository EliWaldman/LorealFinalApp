import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, Image, SafeAreaView, TextInput } from 'react-native';

export default function Price() {

    return (
        //<View style={styles.container}>
            <Text style={styles.cost}>$35.00</Text> 
        //</View>
    );
}

const styles = StyleSheet.create({

    container: {
        //backgroundColor: 'pink',
        marginLeft: 15
    },

    cost: {
        fontSize: 13,
        marginLeft: 12,
        marginTop: 13
    }
})
