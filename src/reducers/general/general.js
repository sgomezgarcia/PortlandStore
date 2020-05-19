import { COMMON } from '../../utils/dispatchTypes';

export const initialState = {
  loading: true,
  user: null
};

const general = (state = initialState, action) => {
  switch (action.type) {
    case COMMON.LOADING:
      return { ...state, loading: true };
    case COMMON.LOADING_END:
      return { ...state, loading: false };
    case COMMON.LOGIN:
      return { ...state, user: action.user };
    case COMMON.LOGOUT:
      return { ...state, user: null};
    default:
      return { ...state };
  }
};

export default general;
