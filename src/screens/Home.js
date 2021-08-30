import React,{useState} from 'react';
import { Text, View ,StyleSheet,Button} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CustomButton } from '../components/CustomButton';

export const Home = ({navigation}) => {

    const buttonHandler = ()=>{
        navigation.navigate('Time Tracking')
    }

    return (
        <View style={styles.sectionContainer}>
        <Text>
            MENU
        </Text>
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
      justifyContent:'center'
    },

  });