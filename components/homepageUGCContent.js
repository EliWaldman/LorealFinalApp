import { Video } from "expo-av";
import React, { forwardRef, useEffect, useImperativeHandle } from "react";
import { useRef } from "react";
import { View, Text, StyleSheet,  } from "react-native";


export const HomepageUGCContent = forwardRef((props, parentRef) => {
    
    const ref = useRef(null);

    useImperativeHandle(parentRef, () => ({
        play,
        unload,
        stop
    }))

    useEffect(() => {
        return () => unload();
        }, [])
    

    const play = async () => {
        if (ref.current == null) { 
            return;
        }
        const status = await ref.current.getStatusAsync(); // makes sure video wont play when it's already playing
        if(status?.isPlaying) { //if video is already playing, app won't crash but will just not play again
            return;
        }
        try {
            await ref.current.playAsync(); //if vid isn't playing, video will start playing when we call this function
        } catch(e) {
            //console.log(e)
        }
    }

    const stop = async () => {
        if (ref.current == null) { 
            return;
        }
        const status = await ref.current.getStatusAsync(); // makes sure video wont play when it's already playing
        if(!status?.isPlaying) { //if video is already playing, app won't crash but will just not play again
            return;
        }
        try {
            await ref.current.stopAsync(); //if vid isn't playing, video will start playing when we call this function
        } catch(e) {
            //console.log(e)
        }
    }

    const unload = async () => {
        // console.log('unload')
        if (ref.current == null) { 
            return;
        }
        try {
            await ref.current.unloadAsync(); //if vid isn't playing, video will start playing when we call this function
        } catch(e) {
            //console.log(e)
        }
    }

 
    return (
        <Video style={styles.container}
            ref={ref} 
            resizeMode={Video.RESIZE_MODE_COVER}
            shouldPlay={true}
            source={{uri: 'https://assets.mixkit.co/videos/preview/mixkit-pov-of-a-basket-of-easter-eggs-48595-large.mp4'}}
            //isLooping
        />
    );
})

const styles = StyleSheet.create({
    
    container: {
        height: 600,
        //justifyContent: 'center'
        //width: 800,
        //marginTop: 10
    }
});

export default HomepageUGCContent