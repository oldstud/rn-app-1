import React,{useState} from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { CustomInput } from '../components/CustomTextInput';
import { List } from '../components/List';

export const TimeTracking = () => {
    
    const [todosItem, setTodosItem] = useState({});
    const initialState = [];
    const [state,setState] = useState([{body:'aaaaa',time:'12213',key:'dasdasraasra'}]);
    
    const transferData = (name,data) => {
       setTodosItem({...todosItem,[name]:data})
        };

    const handlePress = () => {
        let id = Date.now().toString();
        setTodosItem({...todosItem,id});
        setState([...state,todosItem]);
       console.log(state);
    }
    return(
        <View>
            <View>
            <Text>What are you doing?</Text>
            <CustomInput
            placeholder="Research documentation...."
            changeField = {transferData}
            nameInState="body"
            />
            </View>
            <View>
            <Text>How much time did you spend?</Text>  
            <CustomInput
            placeholder="01:30 or 00:40..."
            changeField = {transferData}
            nameInState="time"
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

