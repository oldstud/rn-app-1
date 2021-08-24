import React from 'react'
import { FlatList,View,Text,StyleSheet } from 'react-native'
import { ListItem } from './ListItem';


export const  List = props => {
    const {state} = props;

    const renderItem = ({item}) => (
           <Text>
                <ListItem content={item.body} />
                
                <ListItem content={item.time} />
            </Text>
      );

    return (
        <FlatList
        data={state}
        renderItem={renderItem} 
        extraData={state}
        >
        </FlatList>
    )
}

