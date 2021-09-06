import React,{useState,useContext} from 'react';
import { Text, View ,StyleSheet,Button} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CustomButton } from '../components/CustomButton';

import { AuthContext } from '../context';
import { Registration } from './Registration';
import { LogInScreen } from './LogInScreen';



export const Home = ({navigation}) => {
    const {isLoggin,setIsLoggin} = useContext(AuthContext)

    const Stack = createNativeStackNavigator();
    
    const buttonHandler = (value)=>{
        navigation.navigate(value)
    }

        if(!isLoggin) {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Registration" component={Registration}/>
                <Stack.Screen name="LogIn" component={LogInScreen}/>
            </Stack.Navigator>
         
            )
        } else {
            return (
                <View style={styles.sectionContainer}>
                
                <CustomButton
                title="Track Time > "
                onPress={buttonHandler('Time Tracking')}
                />
                </View>
            )

        }
    

}
const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
      alignItems:'center',
      justifyContent:'center'
    },

  });