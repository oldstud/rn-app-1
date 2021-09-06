import React, { useState,useEffect,useContext } from 'react'
import { TextInput, StyleSheet, View, Button } from 'react-native'


import auth from '@react-native-firebase/auth';
import { AuthContext } from '../context';


export const Registration = () => {
    const {isLoggin,setIsLoggin} = useContext(AuthContext);

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const submitHandler = () => {
  
    auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
    console.log('User account created & signed in!');
    setIsLoggin(true)
     })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
    console.warn(error);
    });


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