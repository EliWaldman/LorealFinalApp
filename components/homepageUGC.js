import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, Button, Image, Dimensions, useWindowDimensions, Animated, } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import HomepageUGCContent from './homepageUGCContent';
import PaginatorHP from './paginatorHP';


export default function HomepageUGC() {
    
    const {width} = useWindowDimensions();

    const mediaRefs = useRef([])
    
    const onViewableItemsChanged = useRef(({ changed }) => {
        changed.forEach(element => {
            const cell = mediaRefs.current[element.key]
            if(cell) {
                // console.log('onViewableItemsChanged', element, element.isViewable)

                if(element.isViewable) {
                    cell.play()
                }else {
                    cell.stop();
                }
            }
        });
    })

    // const array = [1, 2, 3, 4, 5, 6]

    const carouselVideoData = [
        {
            id: '1',
            tag: '@eliwaldman',
            videoURL: 'https://assets.mixkit.co/videos/preview/mixkit-mysterious-pale-looking-fashion-woman-at-winter-39878-large.mp4'
        },

        {
            id: '2',
            tag: '@catharbour',
            videoURL: 'https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4'
        },

        {
            id: '3',
            tag: '@dakreesmerma',
            videoURL: 'https://assets.mixkit.co/videos/preview/mixkit-womans-feet-splashing-in-the-pool-1261-large.mp4'
        },

        {
            id: '4',
            tag: '@maxisbadwithspice',
            videoURL: 'https://assets.mixkit.co/videos/preview/mixkit-reflection-effect-of-a-young-woman-dancing-in-rollerblades-49092-large.mp4'
        },
        
        {
            id: '5',
            tag: '@durdur',
            videoURL: 'https://assets.mixkit.co/videos/preview/mixkit-young-woman-missing-a-bowling-shot-49115-large.mp4'
        },

        {
            id: '6',
            tag: '@silvaceltics',
            videoURL: 'https://assets.mixkit.co/videos/preview/mixkit-father-and-his-little-daughter-eating-marshmallows-in-nature-39765-large.mp4'
        },

    ]

    const renderItem=({ item, index }) => {
        return (
            <View style={[{ width } ]}> 
                <HomepageUGCContent 
                    id={item.id}
                    tag={item.tag}
                    videoURL={item.videoURL}
                    ref={HomepageUGCContentRef => (mediaRefs.current[item.id] = HomepageUGCContentRef)}
                    item={item}
                />
            </View>
        )
    }

    const scrollX = useRef(new Animated.Value(0)).current;
    //const [curentIndex, setCurrentIndex] = useState(0);

    return (
        <View style={styles.container}>
            <View style={styles.textBox}> 
                <Text style={styles.textHeader}>Your Lancome Looks</Text>
                <Text style={styles.textDescrip}>Tag us on TikTok/Instagram for the chance to be featured here!</Text>
            </View>
            
            <FlatList
                data={carouselVideoData}
                // data={array}
                windowSize={4} //only four elements rendered at a time in background on screen vs 21 default items
                initialNumToRender={1} //helping w optimization --> stopping crashes
                maxToRenderPerBatch={2} //helping w optimization --> stopping crashes ---- WAS 2 before
                removeClippedSubviews
                viewabilityConfig={{
                    itemVisiblePercentThreshold: 100 //item must be 100% on screen in order to play/pause/stop a video
                }}
                //renderItem={renderItem}
                renderItem={(item) => renderItem(item)} // function that renders each item -- NEW
                
                horizontal
                pagingEnabled
                //keyExtractor={item => item} //old
                keyExtractor={(item) => item.id} //new 
                decelerationRate={'normal'}
                onViewableItemsChanged={onViewableItemsChanged.current}
                onScroll={Animated.event([{nativeEvent: {contentOffset: { x: scrollX } } }], {
                    useNativeDriver: false,
                })}
                showsHorizontalScrollIndicator={false}

                
            />
            <PaginatorHP data={carouselVideoData.id} scrollX={scrollX}/>
        </View>
    )
}

const styles =StyleSheet.create ({
    container: {
        //backgroundColor: 'yellow',
        //justifyContent: 'center',
        //flexDirection: 'row',c
        //alignContent: 'space-between',
        //height: 200,
        //marginBottom: 10
        height: 740,

    },

    item: {
        //width: 300,
        //height: 300,
    },

    textHeader: {
        fontSize: 30,
        fontWeight: '300',
        //justifyContent: 'center',
        //alignItems: 'center'
    },

    textDescrip: {
        fontSize: 13,
        textAlign: 'center',
        marginTop: 8,
        fontWeight: '300'

    },

    textBox: {
        alignItems: 'center',
        //justifyContent: 'center',
        marginBottom: 25,
        marginTop: 25
    }

});