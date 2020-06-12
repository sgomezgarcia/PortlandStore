import { getAllCategories } from '../categories/categories';
import { getAllProducts, getMyFavoriteProducts } from '../products/products';
import { autoLogin, getOrdersByUser } from '../users/users';
import { COMMON } from '../../utils/dispatchTypes';

export const initApp = () => (dispatch) => Promise.all([
        dispatch(getAllCategories()),
        dispatch(getAllProducts())
    ])
        .then(() => {
            dispatch(autoLogin())
                .then((userLogged) => {
                    if (userLogged && userLogged.uid) {
                        dispatch(getMyFavoriteProducts(userLogged.uid));
                        dispatch(getOrdersByUser(userLogged.uid));
                    }
                    dispatch({ type: COMMON.LOADING_END });
                    Promise.resolve();
                })
                .catch(() => {
                    dispatch({ type: COMMON.LOADING_END });
                    Promise.resolve();
                });
        })
        .catch(() => {
            Promise.reject();
        });
