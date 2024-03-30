/* eslint-disable react/self-closing-comp */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/navigation/MainStack';
import {Provider} from 'react-redux';
import store from './src/store/redux';
import {RecoilRoot} from 'recoil';

function App(): React.JSX.Element {
  return (
    <RecoilRoot>
      <Provider store={store}>
        <NavigationContainer>
          <MainStack></MainStack>
        </NavigationContainer>
      </Provider>
    </RecoilRoot>
  );
}

export default App;
