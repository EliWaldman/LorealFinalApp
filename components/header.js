import {Text,View, StyleSheet, Image, TextInput, Pressable} from "react-native"
import { EvilIcons } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 


export default function Header() {
  
    return (
      <View style={styles.container}>
        <Image style={styles.logo}
          source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Lanc%C3%B4me_logo.svg/2560px-Lanc%C3%B4me_logo.svg.png'}}
        />
        <View style={styles.squeeze}>
          <EvilIcons name="search" size={28} color="black" marginRight={25} />
          <SimpleLineIcons name="bag" size={20} marginRight={25} color="black" />
          <Feather name="menu" size={24} color="black" />       
        </View>
        
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      //flex: 1,
      backgroundColor: 'white',
      padding: 15,
      //gap: 140, // THIS IS A BAD FIX
      //alignItems: "flex-start",
      justifyContent: 'space-between',
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#d3d3d3'
  
    },

    squeeze: {
      flexDirection: "row",
      //justifyContent: 'space-between',
      //alignItems: 'stretch' 
    },

    title: {
      fontSize: 24,
    },
  
    burger: {
      fontSize: 25,

    },
  
    logo: {
      width: 90,
      height: 22,
    },

    mag: {
      width: 20,
      height: 20,
      marginRight: 30
    },

    cart: {
      width: 20,
      height: 20,
      marginRight: 30
    },

    hamburger: {
      width: 20,
      height: 20,
    }
  });