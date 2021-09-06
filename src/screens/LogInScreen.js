import React, { useState,useEffect,useContext } from 'react'
import { TextInput, StyleSheet, View, Button } from 'react-native'


import auth from '@react-native-firebase/auth';
import { AuthContext } from '../context';


export const LogInScreen = () => {
    const {isLoggin,setIsLoggin} = useContext(AuthContext);

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const submitHandler = () => {
        auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error=>{
      let errorCode = error.code;
      let errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
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
       title='Login'
       ></Button>
      
       
    </View>
        
    )

}