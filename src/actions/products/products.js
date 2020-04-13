import functions from '@react-native-firebase/functions';
import { PRODUCTS } from '../../utils/dispatchTypes';

const LOADING = { type: PRODUCTS.LOADING };
const LOADING_END = { type: PRODUCTS.LOADING_END };

export const getAllProducts = () => (dispatch) => {
    dispatch(LOADING);
    return new Promise((resolve, reject) => {
        functions().httpsCallable('getAllProducts')()
            .then(({ data }) => {
                dispatch({ type: PRODUCTS.GET, products: data });
                dispatch(LOADING_END);
                resolve(data);
            })
            .catch((err) => {
                dispatch(LOADING_END);
                reject(err);
            });
    });
};
