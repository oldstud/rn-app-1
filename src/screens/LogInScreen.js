import React, { useState,useEffect,useCallback,useContext } from 'react'
import { TextInput, StyleSheet, View, Button,Alert,Text } from 'react-native'

import { useSelector,useDispatch,useStore,ReactReduxContext } from 'react-redux';
import { LoginFirebase } from '../redux-store/AuthReducer/operations';

import { useForm, Controller } from 'react-hook-form';



export const LogInScreen = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const errorMessage = useSelector(state => state.reducer.error);
  const [errorPass, useErrorPass] = useState(false);
  const [errorEmail, useErrorEmail] = useState(false);
  const [errorText, useErrorText] = useState("");


  useEffect(() => {
    switch (errorMessage) {
      case "auth/wrong-password":
        useErrorPass(true)
        break;
      case "auth/invalid-email":
        useErrorEmail(true)
        break;
      case "auth/user-not-found":
        useErrorText('User not found')
        break;
      default:
        break;
    }

  }, [errorMessage])
   
    const dispatch = useDispatch();
    const onSubmit = (data)=>{
      useErrorPass(false)
      useErrorEmail(false)
      useErrorText(false)
      dispatch(LoginFirebase(data.email,data.password));
    
  }
        
    return (   
      <View>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={errorEmail ? styles.error : false}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder='email'
          />
        )}
        name="email"
        defaultValue=""
        
      />
      {errors.email && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
        required: true,
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={errorPass ? styles.error : false}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder='password'
          />
        )}

        name="password"
        defaultValue=""
        
      />
      {errors.password && <Text>This is required.</Text>}

      <Button title="Submit"
       onPress={handleSubmit(onSubmit)}
       />
       <Text>{errorText}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
  error: {
    borderWidth: 2,
    borderColor: "#FF0000",
    borderRadius: 2
  },
});