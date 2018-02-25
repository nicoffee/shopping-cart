import axios from 'axios';
import { normalize } from 'normalizr';
import * as schema from './schema';

import * as types from './../types';
import { getIsFetching } from '../reducers/goods';

export const addGoodInCart = good => ({
  type: types.ADD_GOOD,
  good
});

export const removeGoodFromCart = (id, price) => ({
  type: types.REMOVE_GOOD,
  id,
  price
});

export const increaseGoodInCartAmount = (id, count) => dispatch => {
  dispatch({
    type: types.INCREASE_GOOD_AMOUNT,
    id,
    count
  });

  dispatch({ type: types.CALC_SUM });
};

export const getGoodDetails = id => ({
  type: types.GET_GOOD_DETAILS,
  id
});

export const fetchGoods = filter => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    type: types.FETCH_GOODS_REQUEST,
    filter
  });

  return axios.get(`http://localhost:3000/${filter}`).then(
    response => {
      dispatch({
        type: types.FETCH_GOODS_SUCCESS,
        filter,
        response: normalize(response.data, schema.arrayOfGoods)
      });
    },
    error =>
      dispatch({
        type: types.FETCH_GOODS_FAILURE,
        filter,
        message: error.message || 'Something went wrong'
      })
  );
};
