import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {Provider} from 'react-redux';
import store from './js/store/store';
import {useDispatch} from 'react-redux';
// import {getNowPlayingAction} from './js/actions/movieAction';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
// Screen
import RootStackScreen from './js/screens/RootStackScreen';

// Navigation
const Drawer = createDrawerNavigator();

const App = () => {
  // const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getNowPlayingAction());
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
