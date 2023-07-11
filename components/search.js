import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, Image, SafeAreaView, TextInput } from 'react-native';


export default function Search() {
    
    const [text, setText] = useState('')

    return (
        <View style={styles.container}>
            <TextInput
            value={text}
            placeholder="I'm looking for"
            onChangeText={(text) => setText(text)}
            />
            <Image style={styles.mag}
            source={{uri:'https://img.icons8.com/?size=512&id=59878&format=png'}}
            />
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
      //flex: .04,
      backgroundColor: '#ececec',
      padding: 10,
      //gap: 10,
      alignItems: "flex-start",
      justifyContent: 'space-between',
      flexDirection: 'row',
  
  
    },

    searchText: {
        fontSize: 15,

    },

    mag: {
        width: 20,
        height: 20,
    }

});