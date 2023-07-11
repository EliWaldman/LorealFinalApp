import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, Image, SafeAreaView, Animated, FlatList, ScrollView, color, useWindowDimensions } from 'react-native';
import slides from '../assets/slides';
import Slides from '../assets/slides';


export default function CarouselItem({ id, title, description, imageURL}) {
    
    const {width} = useWindowDimensions();

    return (
        
        <View style={[styles.item, { width } ]}>
            <Image style={[styles.image, { width } ]} source={{uri:imageURL}}/>
        </View>
    );


}

/* below styles.item to add text to module

<View style={styles.textSection}>
                <Text style={[styles.name, { color: color }]}>{title}</Text>
                <View style={styles.info}>n
                    <Text>Price: {description}</Text>
                    <Text>Quantity: {id}</Text>
                </View>
            </View>

*/

const styles = StyleSheet.create ({
    item: {
        backgroundColor: 'pink',
        //padding: 8,
        //width: 200,
        //marginVertical: 8,
        //flex: 1,
        //flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', 
        //borderRadius: 10,
      },
      
      image: {
        //width: 385,
        height: 370,
        //flex: 0.5,
        justifyContent: 'center',
        //margin: 5,
        //resizeMode: 'contain',
      }
});