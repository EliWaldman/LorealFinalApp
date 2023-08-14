import React, {useState, useRef} from 'react';
import { Text, View, StyleSheet, Button, Image, SafeAreaView, Animated, FlatList, ScrollView, Pressable} from 'react-native';
import SingleProduct from './singleProduct';
import { useFonts } from 'expo-font';


export default function HomepageProductsCarousel() {

    const [fontsLoaded] = useFonts({
        'PlayfairDisplay': require('../assets/fonts/PlayfairDisplaySC-Regular.ttf')
    })

    if(!fontsLoaded){
        return null;
    }

    const productCarouselData = [
        {
            id: '1',
            imageURL: 'https://www.lancome-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lancome-us-master-catalog/default/dw48c95c76/3605533117217_GENIFIQUE_MICROBIOME_50ml_1000x1000.jpg?sw=740&sfrm=jpg&q=70',
            productName: 'Advanced Genifique Face Serum',
            productBoost: 'Radiance Boosting',
            price: '$132.00',
            amount: '1.7 OZ.'
        }, 

        {
            id: '2',
            imageURL: 'https://www.lancome-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lancome-us-master-catalog/default/dw8696d71a/3605533286555_LA_VIE_EST_BELLE_L_EAU_DE_PARFUM_100ml.jpg?sw=740&sfrm=jpg&q=70',
            productName: 'La Vie Est Belle Eau De Parfum',
            productBoost: 'Bright Iris & Warm Vanilla',
            price: '$150.00',
            amount: '1.7 OZ.'
        }, 

        {
            id: '3',
            imageURL: 'https://www.lancome-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lancome-us-master-catalog/default/dw9cf84124/096018205056_BISQUEII_DUALFINISHVERSATILE_1.jpg?sw=740&sfrm=jpg&q=70',
            productName: 'Dual Finish Powder Foundation',
            productBoost: 'Buildable & Mattifying',
            price: '$50.00',
            amount: '1.7 OZ.'
        }, 

        {
            id: '4',
            imageURL: 'https://www.lancome-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lancome-us-master-catalog/default/dwe2409c5e/pdp/00564-LAC/Renergie-Triple-Serum-Packshot-1000x1000_Clear.jpg?sw=740&sfrm=jpg&q=70',
            productName: 'Renergie H.C.F. Triple Serum',
            productBoost: 'Plumping & Dark-Spot Reducing',
            price: '$140.00',
            amount: '1.7 OZ.'
        }, 

        {
            id: '5',
            imageURL: 'https://www.lancome-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lancome-us-master-catalog/default/dw6aef1fef/3614272295353_AbsolueReno_AbsolueSoftCream_Open.jpg?sw=740&sfrm=jpg&q=70',
            productName: 'Absolue Soft Cream Moisturizer',
            productBoost: 'Brightening & Revitalizing',
            price: '$150.00',
            amount: '1.0 OZ.'
        }, 

        {
            id: '6',
            imageURL: 'https://www.lancome-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lancome-us-master-catalog/default/dw16e76b55/3614272295452_AbsolueReno_AbsolueRichCream.jpg?sw=740&sfrm=jpg&q=70',
            productName: 'Absolue Rich Cream Moisturizer',
            productBoost: 'Hydrating & Revitalizing',
            price: '$270.00',
            amount: '2.0 OZ.'
        }, 

        {
            id: '7',
            imageURL: 'https://www.lancome-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lancome-us-master-catalog/default/dwb62da9ae/LCL_102020_Makeup_LashIdole_FullSizePDP_1000x1000.jpg?sw=740&sfrm=jpg&q=70',
            productName: 'Lash Idole Mascara',
            productBoost: 'Lash-Lifting & Volumizing',
            price: '$30.00',
            amount: '1.0 OZ.'
        }, 

        {
            id: '8',
            imageURL: 'https://www.lancome-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lancome-us-master-catalog/default/dw6444a35e/3605533292259_DEFINICILS_BLACK_1000x1000.jpg?sw=740&sfrm=jpg&q=70',
            productName: 'Definicils High-Definition Mascara',
            productBoost: 'Lengthening & Defining',
            price: '$33.00',
            amount: '1.2 OZ.'
        }, 

        {
            id: '9',
            imageURL: 'https://www.lancome-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lancome-us-master-catalog/default/dw85febce5/Lancome-Fragrance-Idole-eau-de-parfum-50ml-000-3614272629370-Closed.jpg?sw=740&sfrm=jpeg&q=70',
            productName: 'Idole Eau De Parfum',
            productBoost: 'Clean, Fresh, Floral',
            price: '$118.00',
            amount: '1.4 OZ.'
        }, 

        {
            id: '10',
            imageURL: 'https://www.lancome-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lancome-us-master-catalog/default/dw9f3df212/pdp/305985/D0490904-LNCM-ToniqueConfortPack-400ml-1000x1000.jpg?sw=740&sfrm=jpg&q=70',
            productName: 'Tonique Confort Hydrating Toner',
            productBoost: 'Hydrating & Purifying',
            price: '$59.00',
            amount: '2.1 OZ.'
        }, 

        {
            id: '11',
            imageURL: 'https://www.lancome-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lancome-us-master-catalog/default/dw802cf34c/3605970326333-RENERGIELIFMULTIACTIONALLSKIN-PACKSHOT.jpg?sw=740&sfrm=jpg&q=70',
            productName: 'Renergie Lift Multi-Action SPF 15',
            productBoost: 'Lifting & Firming',
            price: '$164.00',
            amount: '3.2 OZ.'
        }, 
        
    ]


    const renderProductCarouselItem = ({ item }) => (
        <SingleProduct
            id={item.id}
            imageURL={item.imageURL}
            productName={item.productName}
            productBoost={item.productBoost}
            price={item.price}
            amount={item.amount}
        />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.bestsellers}>OUR BESTSELLERS</Text>
            <FlatList
                data={productCarouselData} // data fed into flatlist
                renderItem={(item) => renderProductCarouselItem(item)} // function that renders each item
                keyExtractor={(item) => item.id} // unique key for each item
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
            />
         </View>
    );

}

const styles = StyleSheet.create ({
    container: {
        //width: 100,
        //height: 100,
        //flex: 1,
        //backgroundColor: 'yellow',
        alignItems: 'center'
    },

    bestsellers: {
        fontSize: 30,
        fontFamily: 'PlayfairDisplay',
        marginTop: 30,
        textAlign: 'center'
        

    }
    
})