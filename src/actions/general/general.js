import { getAllCategories } from '../categories/categories';
import { getAllProducts } from '../products/products';
import { autoLogin } from '../users/users';
import { COMMON } from '../../utils/dispatchTypes';

export const initApp = () => (dispatch) => Promise.all([
        dispatch(getAllCategories()),
        dispatch(autoLogin()),
        dispatch(getAllProducts())
    ])
        .then(() => {
            dispatch({ type: COMMON.LOADING_END });
            Promise.resolve();
        })
        .catch(() => {
            Promise.reject();
        });
