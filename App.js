/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState,useContext,useEffect} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TimeTracking } from './src/screens/TimeTracking';
import { Home } from './src/screens/Home'

import { Auth } from './src/screens/Auth';
import { PhotoPlace } from './src/screens/PhotoPlace';

import { useSelector,useStore,ReactReduxContext  } from 'react-redux';



const App: () => Node = () => {

  let isLogginLocale = useSelector(state=> state.reducer.reducerAuth.isLoggin);
 
    const Tab = createBottomTabNavigator();

  return (
    
      <NavigationContainer>
          {isLogginLocale ? (
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Time Tracking" component={TimeTracking} />
          <Tab.Screen name="Time for Photo" component={PhotoPlace} />
        </Tab.Navigator>
          ):(
            <Auth/>
          )
          }
      </NavigationContainer>


  );
};


export default App;
