/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text, Button, StyleSheet} from 'react-native';
import {RootStackParamList} from '../../navigation/RootParamList';
import axios from 'axios';

type ProductScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'ProductScreen'>;
};

// const InfoProductComponent = React.memo(
//   ({
//     name,
//     actionFetch,
//   }: // actionFetch,
//   {
//     name: String;
//     actionFetch: Function;
//   }): React.JSX.Element => {
//     console.log('🚀 ~ InfoProductComponent:', 'InfoProductComponent');
//     return (
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <Text>Info Product Component {name}</Text>
//       </View>
//     );
//   },
//   // (prevProps, nextProps) => {
//   //   return prevProps.name === nextProps.name;
//   // },
// );

const InfoProductComponent = ({
  name,
}: {
  name: String;
  actionFetch: Function;
}): React.JSX.Element => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Info Product Component {name}</Text>
    </View>
  );
};

const CountComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <View style={styles.wrapButton}>
        <Button
          color={'red'}
          title="Descrase"
          onPress={() => setCount(count - 1)}
        />
        <Button
          color={'green'}
          title="Increase"
          onPress={() => setCount(count + 1)}
        />
      </View>
      <Text>Số hiện tại: {count}</Text>
    </View>
  );
};

const ProductScreen = ({navigation}: ProductScreenProps): React.JSX.Element => {
  const [name, setName] = useState('Phạm Quốc Vỹ');
  const [infoUser, setInfoUser] = useState({
    name: 'NAME',
    age: 10,
  });

  const fetchDataPost = useCallback(async () => {
    const resultPost = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
    console.log({
      listPost: resultPost?.data,
    });
  }, []);

  useEffect(() => {
    fetchDataPost();
  }, []);

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
      <CountComponent />
      <InfoProductComponent name={name} actionFetch={fetchDataPost} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapButton: {
    flexDirection: 'row',
  },
});

export default ProductScreen;
