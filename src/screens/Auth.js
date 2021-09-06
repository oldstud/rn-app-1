import React from "react";
import { LogInScreen } from "./LogInScreen";
import { Registration } from "./Registration";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export const Auth = () => {

    const AuthTab = createBottomTabNavigator();

    return (
        <AuthTab.Navigator initialRouteName="Home">
        <AuthTab.Screen name="Login" component={LogInScreen} />
        <AuthTab.Screen name="Registration" component={Registration} />
         </AuthTab.Navigator>
    )
}