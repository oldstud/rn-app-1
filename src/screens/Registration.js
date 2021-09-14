import React, { useState,useEffect } from 'react'
import { TextInput, StyleSheet, View, Button } from 'react-native'
import { useDispatch } from 'react-redux';
import { RegistrationFirebase } from '../redux-store/AuthReducer/operations';


export const Registration = () => {
  
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const dispatch = useDispatch();
    
    const submitHandler = () => {
        dispatch(RegistrationFirebase(email,password))
    }

    return (   
       
        <View>
            
            <TextInput
            placeholder='email'
            value={email}
            onChangeText={(text)=>setEmail(text)}
            />
            <TextInput
            placeholder='password'
            value={password}
            onChangeText={(text)=>setPassword(text)}
            />
            <Button
            onPress = {submitHandler}
            title='Registration'
            ></Button>
           
            
        </View>
        
    )

}