import { reset } from 'redux-form';
import api from '../api';

function setCurrentUser(dispatch, resp) {
  localStorage.setItem('token', JSON.stringify(resp.meta.token));
  dispatch({ type: 'AUTHENTICATION_SUCCESS', resp });
}

export function login(data, router) {
  return dispatch => api.post('/sessions', data)
    .then((resp) => {
      setCurrentUser(dispatch, resp);
      dispatch(reset('login'));
      router.transitionTo('/');
    });
}

export function signup(data, router) {
  return dispatch => api.post('/users', data)
    .then((resp) => {
      setCurrentUser(dispatch, resp);
      dispatch(reset('signup'));
      router.transitionTo('/');
    });
}

export function logout(router) {
  return dispatch => api.delete('/sessions')
    .then(() => {
      localStorage.removeItem('token');
      dispatch({ type: 'LOGOUT' });
      router.transitionTo('/login');
    });
}

export function authenticate() {
  return (dispatch) => {
    dispatch({ type: 'AUTHENTICATION_REQUEST' });
    return api.post('/sessions/refresh')
      .then((resp) => {
        setCurrentUser(dispatch, resp);
      })
      .catch(() => {
        localStorage.removeItem('token');
        window.location = '/login';
      });
  };
}

export const unauthenticate = () => ({ type: 'AUTHENTICATION_FAILURE' });
