import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

const DetailsScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Detail Screen</Text>
      <Button
        title="Go to details screen"
        onPress={() => navigation.push('Details')}
      />
      <Button
        title="Go to home screen"
        onPress={() => navigation.navigate('Home')}
      />
      <Button title="Go back screen" onPress={() => navigation.goBack()} />
      <Button
        title="Go to first screen"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default DetailsScreen;
