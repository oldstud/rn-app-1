import React, { useState,useEffect } from 'react'
import { TextInput, StyleSheet, View } from 'react-native'

export const CustomTextInput = props => {

    const { placeholder,changeField,nameInState,clearData } = props;
    const [inputData,setInputData] = useState('');

    const changeText = (text) => {
        setInputData(text);
        
    }

    useEffect(() => {
        changeField(nameInState,inputData)
    }, [inputData])

    useEffect(() => {
        setInputData('');
      
      }, [clearData])

return (
    <View>
    <TextInput style={ styles.input }
        placeholder={ placeholder }
        value={ inputData }
        onChangeText={ changeText }

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
