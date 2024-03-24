/* eslint-disable react/self-closing-comp */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/navigation/MainStack';
import {Provider} from 'react-redux';
import store from './src/store/redux';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack></MainStack>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
