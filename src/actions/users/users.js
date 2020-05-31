import auth from '@react-native-firebase/auth';
import functions from '@react-native-firebase/functions';

import { COMMON } from '../../utils/dispatchTypes';

const LOADING = { type: COMMON.LOADING };
const LOADING_END = { type: COMMON.LOADING_END };

const LOADING_USER = { type: COMMON.LOADING_USER };
const LOADING_USER_END= { type: COMMON.LOADING_USER_END };

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
  dispatch(LOADING_USER);
  return new Promise((resolve, reject) => {
    auth().signOut(
      userInfo.email,
      userInfo.password
    )
      .then(() => {
        dispatch({ type: COMMON.LOGOUT, user: null });
        dispatch(LOADING_USER_END);
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
  dispatch(LOADING);
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

export const getOrdersByUser = () => (dispatch, getState) => {
  const useFunction = functions().httpsCallable('getProductsByUserId');
  const {user} = getState().general;
  return new Promise((resolve, reject) => {
    useFunction({ userId: user.uid })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
