import React,{useState} from 'react';
import { Text, View ,StyleSheet,Button} from 'react-native';

import { CustomButton } from '../components/CustomButton';
import { LogOutFirebase } from '../redux-store/AuthReducer/operations';
import { useDispatch } from 'react-redux';


export const Home = ({navigation}) => {

    const dispatch = useDispatch();
    
    const buttonHandler = ()=>{
        navigation.navigate("Time Tracking")
    }
    const logOutHandler = ()=>{
        dispatch(LogOutFirebase());
    }

            return (
                <View style={styles.sectionContainer}>
                
                <CustomButton
                title="< Log Out "
                onPress={logOutHandler}
                />
                 <CustomButton
                title="Track Time > "
                onPress={buttonHandler}
                />
                </View>
            )
    }

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
      alignItems:'center',
      justifyContent:'space-evenly',
      height:'100%',
      
    },

  });