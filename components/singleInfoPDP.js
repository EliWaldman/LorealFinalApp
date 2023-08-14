import React, {useState} from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';


export default function SingleInfoPDP({ id, title, blurb}) {
    
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>{title}</Text>
            </View>
            <View style={styles.blurb}>
                <Text style={styles.blurbText}>{blurb}</Text>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: 'yellow'
    },

    title: {
        //backgroundColor: 'red'
        marginBottom: 5,
        marginTop: 10,
        marginLeft: 8,
        //fontWeight: '200'
    },

    blurb: {
        //backgroundColor: 'blue'
        //textAlign: 'left',
        marginLeft: 8,
        //color: 'gray'
    },

    titleText: {
        fontSize: 20,
        fontWeight: '300'
    },

    blurbText: {
        fontSize: 15,
        color: '#656565',
        fontWeight: '200'

    }
})