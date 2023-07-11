import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, Image, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

export default function Back() {

    //insert const function that is shown after back to below and shows where the user had last been (ie previous page, should be local)
    return (
        <View style={styles.container}>
            <Ionicons name="chevron-back" size={18} marginLeft={8} color="black" />
            <Text style={styles.text}>Back to Lipstick</Text> 
        </View>
    )
}

const styles =StyleSheet.create ({
    container: {
        //backgroundColor: 'orange',
        //padding: 10,
        //justifyContent: 'center',
        flexDirection: 'row',
        alignContent: 'space-between',
        marginTop: 10,
        marginBottom: 10

    },

    text: {
        fontSize: 15,
    },

    back: {
        width: 10,
        height: 20,
        marginRight: 8,
        marginLeft: 12
    }
});
