import React, { useState,useEffect,useCallback,useContext } from 'react'
import { TextInput, StyleSheet, View, Button } from 'react-native'

import { useSelector,useDispatch,useStore,ReactReduxContext } from 'react-redux';
import { LoginFirebase } from '../redux-store/AuthReducer/operations';

// import auth from '@react-native-firebase/auth';



export const LogInScreen = () => {
   
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const dispatch = useDispatch();

    const submitHandler =  () => {
      dispatch(LoginFirebase(email,password));
    };
      

  const info = useSelector(state=>state.reducer.reducerAuth);

  const infoHandler = () => {
    console.log(info);
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

       <Button
       onPress = {infoHandler}
       title='info'
       ></Button>
      
       
    </View>
        
    )

}