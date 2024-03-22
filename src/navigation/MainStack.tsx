import React from 'react';
import {} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../feature/home/HomeScreen';
import AccountScreen from '../feature/account/AccountScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
