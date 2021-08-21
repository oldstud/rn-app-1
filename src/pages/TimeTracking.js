import React,{useState} from 'react';
import { Text, View } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { CustomInput } from '../components/CustomTextInput';

export const TimeTracking = () => {

    const [todosItem, setTodosItem] = useState({});
    const [state,setState] = useState([]);
    
    const transferData = (name,data) => {
       setTodosItem({...todosItem,[name]:data})
        }

    const handlePress = () => {
        setState([...state,state.push(todosItem)]);
        console.log(state);
    }
    return(
        <View>
            <View>
            <Text>What are you doing?</Text>
            <CustomInput
            placeholder="Research documentation...."
            changeField = {transferData}
            />
            </View>
            <View>
            <Text>How much time did you spend?</Text>  
            <CustomInput
            placeholder="01:30 or 00:40..."
            changeField = {transferData}
           
            />
            </View>
            <CustomButton
            title="Add to list"
            onPress={handlePress}
            />

            
        </View>
    )
}