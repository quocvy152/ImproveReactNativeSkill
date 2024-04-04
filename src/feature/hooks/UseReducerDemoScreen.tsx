/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable react-native/no-inline-styles */
import React, {useReducer} from 'react';
import {View, Text, Button} from 'react-native';
import {
  UseReducerGetUsersActionType,
  UseReducerGetUsersResType,
} from './types/UseReducerDemoType';
import axios from 'axios';

const countReducer = (state: number, action: string) => {
  switch (action) {
    case 'INCREASE': {
      return state + 1;
    }
    case 'DESCREASE': {
      return state - 1;
    }
    case 'RESET': {
      return 0;
    }
    default: {
      return state;
    }
  }
};

const initState: UseReducerGetUsersResType = {
  error: false,
  data: [],
  isLoading: false,
};

const getUsersReducer = (
  state: UseReducerGetUsersResType,
  action: UseReducerGetUsersActionType,
) => {
  switch (action.type) {
    case 'GET_USER_REQUEST': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_USER_SUCCESS': {
      return {
        ...state,
        data: action.data,
        isLoading: false,
      };
    }
    case 'GET_USER_FAIL': {
      return {
        error: true,
        data: [],
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};

const UseReducerDemoScreen = ({}): React.JSX.Element => {
  const [count, dispatchCount] = useReducer(countReducer, 0);
  const [dataUser, dispatchUsers] = useReducer(getUsersReducer, initState);

  const fetchDataUsers = async () => {
    dispatchUsers({type: 'GET_USER_REQUEST'});

    setTimeout(async () => {
      const resultUsers = await axios.get('https://reqres.in/api/users?page=2');
      console.log({
        listUser: resultUsers?.data,
      });

      const {total_pages, data} = resultUsers?.data;

      if (total_pages === 0) {
        dispatchUsers({type: 'GET_USER_FAIL'});
      } else {
        dispatchUsers({type: 'GET_USER_SUCCESS', data: data});
      }
    }, 2000);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Use Reducer Demo Screen</Text>
      <Text>Số hiện tại: {count}</Text>
      <Button title="INCREASE" onPress={() => dispatchCount('INCREASE')} />
      <Button title="DESCREASE" onPress={() => dispatchCount('DESCREASE')} />
      <Button title="RESET" onPress={() => dispatchCount('RESET')} />

      {dataUser?.isLoading ? (
        <Text>Loading...</Text>
      ) : (
        dataUser?.data?.map((user: any) => (
          <Text>
            {user?.first_name} {user?.last_name}
          </Text>
        ))
      )}
      <Button title="GET USERS" onPress={() => fetchDataUsers()} />
    </View>
  );
};

export default UseReducerDemoScreen;
