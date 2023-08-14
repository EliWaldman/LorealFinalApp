import React from "react";
import {View, Text, StyleSheet, Animated, useWindowDimensions } from "react-native";
//import { RotateInDownLeft } from "react-native-reanimated";

export default function PaginatorHP({ scrollX }) {

    const {width} = useWindowDimensions();

    const carouselImageData = [
        {
            id: '1',
            title: '',
            description: 'first image',
            imageURL: 'https://www.lancome-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lancome-us-master-catalog/default/dw87633bc7/3614273747431_LAR_Intimatte_226_PACKSHOT_1000X1000.jpg?sw=375&sh=375&sm=cut&sfrm=jpeg&q=70'
        },
    
       {
            id: '2',
            title: 'fnasjkdfhkl',
            description: 'second image',
            imageURL: 'https://www.lancome-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lancome-us-master-catalog/default/dw37458440/LNCM_Beauty-ArmSwatch_1000x1000_V2.jpg?sw=375&sh=375&sm=cut&sfrm=jpg&q=70'
    
        },
        
        {
            id: '3',
            title: 'asdfasdf',
            description: 'third image',
            imageURL: 'https://www.lancome-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lancome-us-master-catalog/default/dw5fb634f4/LNCM_Lipstick_1000x1000_V2.jpg?sw=375&sh=375&sm=cut&sfrm=jpg&q=70'
    
        },
    
        {
            id: '4',
            title: '',
            description: 'fourth image',
            imageURL: 'https://www.lancome-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lancome-us-master-catalog/default/dw6e16341c/3614273747431_LAR_Intimatte_226_SWATCH_1000X1000.jpg?sw=375&sh=375&sm=cut&sfrm=jpg&q=70'
    
        },
    
        {
            id: '5',
            title: '',
            description: 'fifth image',
            imageURL: 'https://www.lancome-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lancome-us-master-catalog/default/dw21b6ecd3/3614273747431_LAR_Intimatte_226_BV_1000X1000.jpg?sw=375&sh=375&sm=cut&sfrm=jpg&q=70'
    
        },
    
        {
            id: '6',
            title: '',
            description: 'sixth image',
            imageURL: 'https://www.lancome-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lancome-us-master-catalog/default/dwe6dca5c8/LAR_INTIMATTE_SHADE_RANGE_1000x1000.jpg?sw=375&sh=375&sm=cut&sfrm=jpeg&q=70'
    
        }
    ];
    return (
        <View style={styles.container}>
            {carouselImageData.map((_, i) => {
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
                
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 20, 10],
                    extrapolate: 'clamp',
                });

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3, 1, 0.3],
                    extrapolate: 'clamp'
                });

                return <Animated.View style={[styles.dot, {width: dotWidth, opacity, }]} key={i.toString()} />;
            })}
        </View>
    );
}

const styles = StyleSheet.create({ 
    
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 50,
        //backgroundColor: 'green',
        marginBottom: 15,
        //marginTop: 15
    },
    
    dot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: '#e40072',
        //justifyContent: 'space-between',
        //alignItems: "center",
        //flex: 1,
        //marginLeft: 15,
        marginTop: 15,
        marginHorizontal: 8,
    }
});