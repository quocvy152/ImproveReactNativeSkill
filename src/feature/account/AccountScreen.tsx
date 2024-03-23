/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {View, Text, Button} from 'react-native';
import {RootStackParamList} from '../../navigation/RootParamList';

type AccountScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'AccountScreen'>;
  route: RouteProp<RootStackParamList, 'AccountScreen'>;
};

const AccountScreen = ({
  navigation,
  route,
}: AccountScreenProps): React.JSX.Element => {
  const {userID} = route.params;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Account Screen {userID}</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate('HomeScreen')}
      />
      <Button
        title="Go to Product Screen"
        onPress={() => navigation.navigate('ProductScreen')}
      />
    </View>
  );
};

export default AccountScreen;
