import React from 'react'
import { Text, View,StyleSheet } from 'react-native'

export const ListItem = props => {
    const {content} = props;

    return (
        <View>
            <Text style={styles.container}>{content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        margin:10,
        padding:10,
        color:"#fff",
        backgroundColor:"#000"
    }
})