import React, {useState, useRef} from 'react';
import { Text, View, StyleSheet, Button, Image, SafeAreaView, Animated, FlatList, ScrollView } from 'react-native';
import { FadeIn } from 'react-native-reanimated';
import slides from '../assets/slides';
//import slides from '../assets/slides';
//import Slides from '../assets/slides';
import CarouselItem from './carouselItem';
import Paginator from './paginator';

export default function Carousel() {

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

    // given an item, render it as a CarouselItem component with the props that describe the item
    // (check out carouselItem.js to see how the component itself is coded)

    const renderCarouselItem = ({ item }) => (
        <CarouselItem
        id={item.id}
        title={item.title}
        description={item.description}
        imageURL={item.imageURL}
        />
    );
    
    const scrollX = useRef(new Animated.Value(0)).current;
    const [curentIndex, setCurrentIndex] = useState(0);
    
    const viewableItemsChanged = useRef(({viewableItems}) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef ({ viewAreaCoveragePercentThreshold: 50}).current;

    return (
        <View style={styles.container}>
            <FlatList
            data={carouselImageData} // the array of data that the FlatList displays
            renderItem={(item) => renderCarouselItem(item)} // function that renders each item
            keyExtractor={(item) => item.id} // unique key for each item
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            bounces={false}
            onScroll={Animated.event([{nativeEvent: {contentOffset: { x: scrollX } } }], {
                useNativeDriver: false,
            })}
            scrollEventThrottle={32}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={carouselImageData.id} 
            />
            <Paginator data={carouselImageData.id} scrollX={scrollX}/>
        </View>
        
    );


}


const styles = StyleSheet.create ({
    
    container: {
        //backgroundColor: 'yellow',
    },

    pics: {
        //justifyContent: 'center',
        alignItems: 'center'
    }
});




