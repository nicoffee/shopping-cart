import { combineReducers } from 'redux';
import * as types from './../types';

const createList = filter => {
  const ids = (state = [], action) => {
    if (action.filter !== filter && action.type !== 'ADD_GOOD') {
      return state;
    }
    switch (action.type) {
      case types.FETCH_GOODS_SUCCESS:
        return action.response.result;
      case types.ADD_GOOD:
        console.log('state', state);
        return state;
      default:
        return state;
    }
  };

  const isFetching = (state = false, action) => {
    if (action.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case types.FETCH_GOODS_REQUEST:
        return true;
      case types.FETCH_GOODS_SUCCESS:
      case types.FETCH_GOODS_FAILURE:
        return false;
      default:
        return state;
    }
  };

  const errorMessage = (state = null, action) => {
    if (action.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case types.FETCH_GOODS_FAILURE:
        return action.message;
      case types.FETCH_GOODS_REQUEST:
      case types.FETCH_GOODS_SUCCESS:
        return null;
      default:
        return state;
    }
  };

  return combineReducers({
    ids,
    isFetching,
    errorMessage
  });
};

export default createList;

export const getIds = state => {
  return state.ids;
};
export const getIsFetching = state => state.isFetching;
export const getErrorMessage = state => state.errorMessage;
