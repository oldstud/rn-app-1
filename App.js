/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TimeTracking } from './src/screens/TimeTracking';
import { Home } from './src/screens/Home'


const Stack = createNativeStackNavigator();

const App: () => Node = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} option={{title:'After Login Page'}} />
     <Stack.Screen name="Time Tracking" component={TimeTracking} />

    </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
