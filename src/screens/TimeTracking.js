import React,{useState} from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { CustomInput } from '../components/CustomTextInput';
import { List } from '../components/List';

export const TimeTracking = () => {
    const initialTodosItem = {};
    const [todosItem, setTodosItem] = useState(initialTodosItem);
    const [clearData,setClearData] = useState(false);
    const [state,setState] = useState([]);

    const transferData = (name,data) => {
       setTodosItem({
           ...todosItem,
           [name]:data,
            id : Date.now().toString()
        })
      
        };

    const handlePress = () => {
        setState([...state,todosItem]);
        clearTodosHandler();
        console.log(state);
        
    }

    const clearTodosHandler = () => {
        setClearData(!clearData)
        setTodosItem(initialTodosItem)
    }

    return(
        <View style={styles.sectionContainer}>
            <View>
            <Text>What are you doing?</Text>
            <CustomInput
            placeholder="Research documentation...."
            changeField = {transferData}
            nameInState="body"
            clearData={clearData}
            
            />
            </View>
            <View>
            <Text>How much time did you spend?</Text>  
            <CustomInput
            placeholder="01:30 or 00:40..."
            changeField = {transferData}
            nameInState="time"
            clearData={clearData}
            />
            </View>
            <CustomButton   
            title="Add to list"
            onPress={handlePress}
            />

            <List 
            state={state}
            ></List>
            
        </View>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
  });
