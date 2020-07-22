import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

// Screen
import HomeScreen from './HomeScreen';
import OrderScreen from './OrderScreen';
import ProfileScreen from './ProfileScreen';
import FavouriteScreen from './Favourite';

// Stack Navigation
const HomeStack = createStackNavigator();
const OrderStack = createStackNavigator();
const FavouritesStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Explore"
    activeColor="#090240"
    inactiveColor="grey"
    style={{backgroundColor: 'tomato'}}>
    <Tab.Screen
      name="Explore"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Explore',
        tabBarColor: '#fff',
        tabBarIcon: ({color}) => (
          <Icon name="md-fast-food-outline" color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
      name="My Order"
      component={OrderStackScreen}
      options={{
        tabBarLabel: 'My Order',
        tabBarColor: '#fff',
        tabBarIcon: ({color}) => (
          <Icon name="ios-newspaper-outline" color={color} size={25} />
        ),
      }}
    />

    <Tab.Screen
      name="Favourites"
      component={FavouriteStackScreen}
      options={{
        tabBarLabel: 'Favourites',
        tabBarColor: '#fff',
        tabBarIcon: ({color}) => (
          <Icon name="ios-heart-outline" color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#fff',

        tabBarIcon: ({color}) => (
          <Icon name="ios-person-outline" color={color} size={25} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#090240',
      fontWeight: 'bold',
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Indah Kitchen App',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#fff"
            color="#090240"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <Icon.Button
            name="notifications-outline"
            size={25}
            backgroundColor="#fff"
            color="090240"
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);

const OrderStackScreen = ({navigation}) => (
  <OrderStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#090240',
      fontWeight: 'bold',
    }}>
    <OrderStack.Screen name="My Order" component={OrderScreen} />
  </OrderStack.Navigator>
);

const FavouriteStackScreen = ({navigation}) => (
  <FavouritesStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#090240',
      fontWeight: 'bold',
    }}>
    <FavouritesStack.Screen name="Favourites" component={FavouriteScreen} />
  </FavouritesStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#090240',
      fontWeight: 'bold',
    }}>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} />
  </ProfileStack.Navigator>
);
