import React from 'react'
import { Button,StyleSheet } from 'react-native'


export const CustomButton = (props: any) => {
    
    const {title,onPress} = props;

return(
    <Button
    title={title}
    onPress = {onPress}
    // style = {styles.btnContainer}
    />
)
}

const styles = StyleSheet.create({
    btnContainer: {
      marginTop: 40,
    },

  });