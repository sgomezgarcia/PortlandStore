import functions from '@react-native-firebase/functions';
import { PRODUCTS, ORDERS, COMMON } from '../../utils/dispatchTypes';
import { getFavsIds } from '../../utils/helpers';

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

export const addToCart = (product) => (dispatch) => new Promise((resolve) => {
    dispatch({ type: ORDERS.ADD_CART, product });
    resolve();
});

export const setCart = (cart) => (dispatch) => new Promise((resolve) => {
    dispatch({ type: ORDERS.SET_CART, cart });
    resolve();
});

export const filterByCategory = (category) => (dispatch, getState) => new Promise((resolve, reject) => {
        const { products } = getState().product;
        let filteredProducts = [ ...products ];
        if (category && category.id) {
            filteredProducts = products.filter((item) => item.category === category.id && category.genre === item.gender);
            // Save products in store
            dispatch({ type: PRODUCTS.GET_FILTERED, products: filteredProducts });
            resolve(filteredProducts);
        } else {
            reject(new Error('Wrong params'));
            // loading end
        }
    });

export const filterByGender = (gender) => (dispatch, getState) => new Promise((resolve) => {
        const { products } = getState().product;
        let filteredProducts = [ ...products ];
        if (gender) {
            const filterRes = filteredProducts.filter((item) => (item.gender === gender || !item.gender));
            filteredProducts = filterRes;
        }
        dispatch({ type: PRODUCTS.GET_FILTERED, products: filteredProducts });
        resolve(filteredProducts);
    });

export const getMyFavoriteProducts = (userId) => (dispatch) => {
    const useFunction = functions().httpsCallable('getFavoritesByUser');
    return new Promise((resolve, reject) => {
        useFunction({
            userId
        })
        .then(({ data }) => {
            const userFavorites = getFavsIds(data.data);
            dispatch({ type: COMMON.GET_FAVS, userFavorites });
            resolve();
        })
        .catch((err) => {
            reject(err);
        });
    });
};

export const favoriteProducts = (productId) => (dispatch, getState) => new Promise((resolve, reject) => {
    const useFunction = functions().httpsCallable('favoriteProducts');
    const {user} = getState().general;
    useFunction({
        favoriteProducts: {
            userId: user.uid,
            products: productId
        }
    })
    .then(() => {
        resolve();
    })
    .catch((err) => {
        reject(err);
    });
});
