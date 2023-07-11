import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, Image, SafeAreaView, TextInput, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Heart() {

    const [liked, setLiked] = useState(false);

    return (
        <View style={styles.container}>

            <View style={styles.left}>
                <Text style={styles.promo}>NEW</Text>
                <Text style={styles.promo}>ENGRAVE IT</Text>
            </View>

            <View style={styles.right}>
                <Pressable onPress={() => setLiked(!liked)}>
                    {liked ? (
                        <AntDesign name="heart" size={24} color="#e40072" />
                    ) : (
                        <AntDesign name="hearto" size={24} color="black" />
                    )}
                </Pressable>
                
            </View>


        </View>
        
    );
}

const styles = StyleSheet.create({
    
    container: {
        //backgroundColor: 'orange',
        //marginLeft: 12,
        marginTop: 13,
        justifyContent: 'space-between',
        //alignItems: 'stretch',
        flexDirection: 'row'
        
    },

    promo: {
        fontSize: 10,
        marginLeft: 12,
        color: '#e40072'
    },

    right: {
        marginRight: 25
    }

})