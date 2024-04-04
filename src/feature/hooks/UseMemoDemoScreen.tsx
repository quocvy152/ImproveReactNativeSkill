/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
import React, {useEffect, useMemo, useState} from 'react';
import {View, Text, Button, ActivityIndicator} from 'react-native';
import axios from 'axios';

const UseReducerDemoScreen = ({}): React.JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [resultAPI, setResultAPI] = useState(null);

  const fetchData = async (time: number) => {
    setIsLoading(true);
    const result = await axios.get(`https://fakeresponder.com/?sleep=${time}`);
    setResultAPI(result?.data?.about);
    setIsLoading(false);
    return result?.data;
  };

  const memoizationFetchData = useMemo(async () => {
    return await fetchData(count);
  }, [count]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Use Memo Demo Screen</Text>
      <Text>Số hiện tại: {count}</Text>
      <Text>
        Trạng thái Fetch Data:{' '}
        {isLoading ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <Text>Đã Fetch Xong</Text>
        )}
      </Text>
      <Text>
        Thông tin: {isLoading ? 'Loading...' : `${JSON.stringify(resultAPI)}`}
      </Text>
      <Button
        title="CLICK"
        onPress={() => {
          if (count === 4000) {
            setCount(prevCount => prevCount);
          } else {
            setCount(prevCount => prevCount + 1000);
          }
          // setCount(prevCount => prevCount);
        }}></Button>
    </View>
  );
};

export default UseReducerDemoScreen;
