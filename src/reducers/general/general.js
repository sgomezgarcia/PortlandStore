import { COMMON, CATEGORIES, ORDERS } from '../../utils/dispatchTypes';

export const initialState = {
  loading: true,
  loading_user: false,
  user: null,
  categories: [],
  orders: [],
  userCart: []
};

const general = (state = initialState, action) => {
  switch (action.type) {
    case COMMON.LOADING:
      return { ...state, loading: true };
    case COMMON.LOADING_END:
      return { ...state, loading: false };
    case COMMON.LOGIN:
      return { ...state, user: action.user };
    case COMMON.LOADING_USER:
      return { ...state, loading_user: true };
    case COMMON.LOADING_USER_END:
      return { ...state, loading_user: false };
    case COMMON.LOGOUT:
      return { ...state, user: null};
    case CATEGORIES.GET:
      return { ...state, categories: action.categories};
    case ORDERS.GET:
      return { ...state, orders: action.orders};
    case ORDERS.ADD_CART:
      return { ...state, userCart: [ ...state.userCart, action.product ]};
    default:
      return { ...state };
  }
};

export default general;
