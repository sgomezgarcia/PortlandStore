import React from 'react';
import { Provider } from 'react-redux';

import 'react-native-gesture-handler';

import store from './store';

import Main from './src/containers/app';


const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);


export default App;
