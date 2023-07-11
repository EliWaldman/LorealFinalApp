import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, Button, Image, Dimensions, useWindowDimensions, } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import HomepageUGCContent from './homepageUGCContent';


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

    const array = [1, 2, 3, 4, 5, 6]

    const renderItem=({item, index}) => {
        return (
            <View style={[{ width } ]}> 
                <HomepageUGCContent ref={HomepageUGCContentRef => (mediaRefs.current[item] = HomepageUGCContentRef)}/>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.textBox}> 
                <Text style={styles.textHeader}>Your Lancome Looks</Text>
                <Text style={styles.textDescrip}>Tag us on TikTok/Instagram for the chance to be featured here!</Text>
            </View>
            
            <FlatList
                data={array}
                windowSize={4} //only four elements rendered at a time in background on screen vs 21 default items
                initialNumToRender={1} //helping w optimization --> stopping crashes
                maxToRenderPerBatch={2} //helping w optimization --> stopping crashes
                removeClippedSubviews
                viewabilityConfig={{
                    itemVisiblePercentThreshold: 100 //item must be 100% on screen in order to play/pause/stop a video
                }}
                renderItem={renderItem}
                horizontal
                pagingEnabled
                keyExtractor={item => item}
                decelerationRate={'normal'}
                onViewableItemsChanged={onViewableItemsChanged.current}
            />
        </View>
    )
}

const styles =StyleSheet.create ({
    container: {
        backgroundColor: 'orange',
        //justifyContent: 'center',
        //flexDirection: 'row',c
        //alignContent: 'space-between',
        //height: 200,
        //marginBottom: 10
        height: 750,

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
        marginTop: 8

    },

    textBox: {
        alignItems: 'center',
        //justifyContent: 'center',
        marginBottom: 25,
        marginTop: 25
    }

});