import React, { useState } from 'react'
import { TextInput, StyleSheet, View } from 'react-native'

export const CustomInput = props => {
    const { placeholder,changeField } = props;

    const [inputData,setInputData] = useState('');

    const changeText = (text) => {
        setInputData(text);
        changeField(placeholder,inputData)
    }
return(
    <View>
    <TextInput style={styles.input}
        placeholder={ placeholder }
        value={ inputData }
        onChangeText={changeText}
    />  
    </View>
)
}

const styles = StyleSheet.create({
    input:{
        margin:10,
        padding:10,
        borderWidth:2,
        borderColor:"#000",
        backgroundColor: "pink",
    }
})
