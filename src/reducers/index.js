import { combineReducers } from 'redux';

import general from './general/general';

const rootReducer = combineReducers({
    general,
});

export default rootReducer;
