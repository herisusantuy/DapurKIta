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
import {useDispatch} from 'react-redux';
import {getNowPlayingAction} from '../actions/movieAction';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNowPlayingAction());
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
