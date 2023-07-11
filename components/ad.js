import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, Image, SafeAreaView } from 'react-native';

export default function Ad() {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Complimentary shipping on $60+</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      //flex: .06,
      backgroundColor: '#e40072',
      alignItems: "flex-start",
      justifyContent: 'center',
      flexDirection: 'row',
      padding: 15
  
    },

    text: {
        color: 'white',
        //marginTop: 12,
    }

});