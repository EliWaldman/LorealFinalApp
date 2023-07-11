import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, Image, SafeAreaView, TextInput } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 


export default function Rating() {

    return (
        <View style={styles.container}> 
                
                <Entypo name="star" size={15} color="black" marginLeft={10} />
                <Entypo name="star" size={15} color="black" />
                <Entypo name="star" size={15} color="black" />
                <Entypo name="star" size={15} color="black" />
                <Entypo name="star-outlined" size={15} color="black" />
        
                <Text style={styles.number}>
                    4.7 (494)
                </Text>
                
                <Text style={styles.number}>
                    Write a review
                </Text>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        //backgroundColor: 'orange',
        flexDirection: 'row',
        marginTop: 13,
        //marginLeft: 12
    
    },

    star: {
        width: 12,
        height: 12,
        marginRight: 3 
    },

    number: {
        fontSize: 13,
        fontWeight: '600',
        marginLeft: 15,
        textDecorationLine: 'underline',
        color: '#e40072'

    
    
    },

})