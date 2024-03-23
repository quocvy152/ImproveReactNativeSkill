/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text, Button} from 'react-native';
import {RootStackParamList} from '../../navigation/RootParamList';

type ProductScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'ProductScreen'>;
};

const ProductScreen = ({navigation}: ProductScreenProps): React.JSX.Element => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Product Screen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate('HomeScreen')}
      />
      <Button
        title="Go to Account Screen"
        onPress={() => navigation.navigate('AccountScreen', {userID: ''})}
      />
    </View>
  );
};

export default ProductScreen;
