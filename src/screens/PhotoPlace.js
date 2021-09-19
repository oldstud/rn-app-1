import React,{useState} from "react";
import { Button, View,Image, Text,StyleSheet } from "react-native";
import { RNCameraComponent } from "../components/RNCameraComponent";


export const PhotoPlace = () => {

    const[imgUri,setImgUri] = useState(null);

function getPicture ({uri}) {
    setImgUri(uri)
    
}

    return (
        <>
        <RNCameraComponent onpicture={getPicture}></RNCameraComponent>
       
        {imgUri?
        (
        <Image source={{uri:imgUri}} style={styles.tinyLogo} />
        ):( 
            <Text style={styles.container}>The storage is empty</Text>
        )

        }
        </>
        
    )
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
        marginTop: 50,
        width: 50,
        height: 50,
    },
 
  });