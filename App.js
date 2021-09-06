/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
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
import { AuthContext } from './src/context';
import { Auth } from './src/screens/Auth';
import { PhotoPlace } from './src/screens/PhotoPlace';




const App: () => Node = () => {

  const [isLoggin, setIsLoggin] = useState(false);

  const Tab = createBottomTabNavigator();

  return (
    <AuthContext.Provider value={{isLoggin,setIsLoggin}}>
    <NavigationContainer>
        {isLoggin ? (
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
    </AuthContext.Provider>
  );
};


export default App;
