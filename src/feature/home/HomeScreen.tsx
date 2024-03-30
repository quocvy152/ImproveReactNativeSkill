/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/RootParamList';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/redux';
import {addUser} from '../../store/users';

// Định nghĩa kiểu dữ liệu của props navigation cho màn hình HomeScreen
type HomeScreenNavigationProp = {
  navigation: StackNavigationProp<RootStackParamList, 'HomeScreen'>;
};

const HomeScreen = ({
  navigation,
}: HomeScreenNavigationProp): React.JSX.Element => {
  const listUser = useSelector((state: RootState) => state.users.listUser);
  const dispatch = useDispatch();

  const addNewUser = () => {
    const genID = Math.ceil(Math.random() * 100);

    dispatch(
      addUser({
        _id: genID,
        username: 'username_' + genID,
        fullname: 'fullname_' + genID,
        age: genID + 1,
      }),
    );
  };

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
      <Button
        title="Go to Cart Screen"
        onPress={() => navigation.navigate('CartScreen')}
      />
      <View>
        <Button title="Thêm user mới" onPress={addNewUser} />

        {listUser?.map((user: any) => (
          <View style={styles.wrapInfoUser}>
            <Text>Tên: {user.fullname}</Text>
            <Text style={{marginLeft: 10}}>Tuổi: {user.age}</Text>
          </View>
        ))}

        {listUser?.length === 0 && <Text>Hiện tại không có user nào</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapHomeScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  wrapInfoUser: {
    flexDirection: 'row',
  },
});

export default HomeScreen;
