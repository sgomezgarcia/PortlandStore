import { getAllCategories } from '../categories/categories';
import { getAllProducts, getMyFavoriteProducts } from '../products/products';
import { autoLogin } from '../users/users';
import { COMMON } from '../../utils/dispatchTypes';

export const initApp = () => (dispatch, getState) => Promise.all([
        dispatch(getAllCategories()),
        dispatch(autoLogin()),
        dispatch(getAllProducts())
    ])
        .then(() => {
            const {user} = getState().general;
            if (user.uid) {
                dispatch(getMyFavoriteProducts(user.uid));
            }
            dispatch({ type: COMMON.LOADING_END });
            Promise.resolve();
        })
        .catch(() => {
            Promise.reject();
        });
