import { PRODUCTS } from '../../utils/dispatchTypes';

export const initialState = {
  loading: false,
  products: [],
  filteredProducts: []
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS.LOADING:
      return { ...state, loading: true };
    case PRODUCTS.LOADING_END:
      return { ...state, loading: false };
    case PRODUCTS.GET:
        return { ...state, products: action.products };
    case PRODUCTS.GET_FILTERED:
      return { ...state, products: action.products };
    default:
      return { ...state };
  }
};

export default products;
