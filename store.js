import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import reducers from './src/reducers';

export const middlewares = [
  reduxThunk
];

const store = createStore(
  reducers,
  applyMiddleware(...middlewares),
);

export default store;
