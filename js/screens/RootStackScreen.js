import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screen 
import MainTabScreen from './MainTabScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator headerMode="none"> 
    <RootStack.Screen name="MainTabScreen" component={MainTabScreen} /> 
  </RootStack.Navigator>
);

export default RootStackScreen;
