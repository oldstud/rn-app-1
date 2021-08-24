import React from 'react'
import { Button } from 'react-native'


export const CustomButton = props => {
    
    const {title,onPress} = props;

return(
    <Button
    title={title}
    onPress = {onPress}
    />
)
}