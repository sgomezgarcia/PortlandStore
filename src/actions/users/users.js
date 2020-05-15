import auth from '@react-native-firebase/auth';
import { COMMON } from '../../utils/dispatchTypes';

const LOADING = { type: COMMON.LOADING };
const LOADING_END = { type: COMMON.LOADING_END };

export const login = (userInfo) => (dispatch) => {
  dispatch(LOADING);
  return new Promise((resolve, reject) => {
    if (!userInfo || !userInfo.email || !userInfo.password) {
      reject(new Error('Wrong params'));
      dispatch(LOADING_END);
    } else {
      auth().signInWithEmailAndPassword(
        userInfo.email,
        userInfo.password
      )
        .then(({ user }) => {
          dispatch({ type: COMMON.LOGIN, user: user._user });
          dispatch(LOADING_END);
          resolve(user);
        })
        .catch((error) => {
          reject(error);
          dispatch(LOADING_END);
        });
    }
  });
};

export const setUser = (user) => (dispatch) => dispatch({ type: COMMON.LOGIN, user });
