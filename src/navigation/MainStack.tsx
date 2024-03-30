import React from 'react';
import {} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../feature/home/HomeScreen';
import AccountScreen from '../feature/account/AccountScreen';
import ProductScreen from '../feature/product/ProductScreen';
import CartScreen from '../feature/cart/CartScreen';
import {RootStackParamList} from './RootParamList';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'Trang chủ'}}
      />
      <Stack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{title: 'Tài khoản'}}
      />
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{title: 'Sản phẩm'}}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{title: 'Recoil Demo'}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
