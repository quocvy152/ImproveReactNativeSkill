import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/RootParamList';

// Định nghĩa kiểu dữ liệu của props navigation cho màn hình HomeScreen
type HomeScreenNavigationProp = {
  navigation: StackNavigationProp<RootStackParamList, 'HomeScreen'>;
};

const HomeScreen = ({
  navigation,
}: HomeScreenNavigationProp): React.JSX.Element => {
  return (
    <View style={styles.wrapHomeScreen}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Account Screen"
        onPress={() => navigation.navigate('AccountScreen', {userID: '123456'})}
      />
      <Button
        title="Go to Product Screen"
        onPress={() => navigation.navigate('ProductScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapHomeScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
