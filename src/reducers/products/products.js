import { PRODUCTS } from '../../utils/dispatchTypes';

export const initialState = {
  loading: false,
  products: []
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS.LOADING:
      return { ...state, loading: true };
    case PRODUCTS.LOADING_END:
      return { ...state, loading: false };
    case PRODUCTS.GET:
        return { ...state, products: action.products };
    default:
      return { ...state };
  }
};

export default products;
