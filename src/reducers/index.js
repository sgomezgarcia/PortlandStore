import { combineReducers } from 'redux';

import general from './general/general';
import product from './products/products';

const rootReducer = combineReducers({
    general,
    product,
});

export default rootReducer;
