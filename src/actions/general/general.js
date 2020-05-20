import { getAllCategories } from '../categories/categories';
import { autoLogin } from '../users/users';
import { COMMON } from '../../utils/dispatchTypes';

export const initApp = () => (dispatch) => Promise.all([
        dispatch(getAllCategories()),
        dispatch(autoLogin())
    ])
        .then(() => {
            dispatch({ type: COMMON.LOADING_END });
            Promise.resolve();
        })
        .catch(() => {
            Promise.reject();
        });
