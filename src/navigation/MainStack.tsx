import React from 'react';
import {} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../feature/home/HomeScreen';
import AccountScreen from '../feature/account/AccountScreen';
import ProductScreen from '../feature/product/ProductScreen';
import CartScreen from '../feature/cart/CartScreen';
import HookDemoScreen from '../feature/hooks/HookDemoScreen';
import UseReducerDemoScreen from '../feature/hooks/UseReducerDemoScreen';
import UseMemoDemoScreen from '../feature/hooks/UseMemoDemoScreen';
import AnimatedScreen from '../feature/animations/AnimatedScreen';
import MomoHeader from '../feature/momo/MomoHeader';
import RenderPropExample from '../feature/design_pattern/RenderPropExample';
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
      <Stack.Screen
        name="HookDemoScreen"
        component={HookDemoScreen}
        options={{title: 'Hook Demo Screen'}}
      />
      <Stack.Screen
        name="UseReducerDemoScreen"
        component={UseReducerDemoScreen}
        options={{title: 'Hook Demo Screen'}}
      />
      <Stack.Screen
        name="UseMemoDemoScreen"
        component={UseMemoDemoScreen}
        options={{title: 'Hook UseMemo Demo Screen'}}
      />
      <Stack.Screen
        name="AnimatedScreen"
        component={AnimatedScreen}
        options={{title: 'Animated Demo Screen'}}
      />
      <Stack.Screen
        name="MomoHeader"
        component={MomoHeader}
        options={{title: 'Momo Header Screen', headerShown: false}}
      />
      <Stack.Screen
        name="RenderPropExample"
        component={RenderPropExample}
        options={{title: 'Render Prop'}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
