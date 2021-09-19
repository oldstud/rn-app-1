import React, { useState,useEffect } from 'react'
import { TextInput, StyleSheet, View, Button,Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { RegistrationFirebase } from '../redux-store/AuthReducer/operations';

import { useForm, Controller } from 'react-hook-form';


export const Registration = () => {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const errorMessage = useSelector(state => state.reducer.error);
    const [errorPass, useErrorPass] = useState(false);
    const [errorEmail, useErrorEmail] = useState(false);
    
    const onSubmit = (data)=>{
        console.log(data);
        dispatch(RegistrationFirebase(data.email,data.password));
    }
    useEffect(() => {
      switch (errorMessage) {
        case "auth/email-already-in-use":
          useErrorEmail(true)
          break;
        case "auth/invalid-email":
          useErrorPass(true)
          break;
        default:
          break;
      }
  
    }, [errorMessage])

    
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