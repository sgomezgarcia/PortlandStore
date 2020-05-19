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

export const logout = (userInfo) => (dispatch) => {
  dispatch(LOADING);
  return new Promise((resolve, reject) => {
    auth().signOut(
      userInfo.email,
      userInfo.password
    )
      .then(() => {
        dispatch({ type: COMMON.LOGOUT, user: null });
        dispatch(LOADING_END);
        resolve();
      })
      .catch((error) => {
        reject(error);
        dispatch(LOADING_END);
      });
  });
};

export const setUser = (user) => (dispatch) => dispatch({ type: COMMON.LOGIN, user });

export const autoLogin = () => (dispatch) => {
  dispatch(LOADING_END);
  return new Promise((resolve, reject) => {
    auth().onAuthStateChanged((loggedUser) => {
      if (loggedUser) {
        dispatch({ type: COMMON.LOGIN, user: loggedUser._user });
      }
      dispatch(LOADING_END);
      resolve();
  });
  });
};
