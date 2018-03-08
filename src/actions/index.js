import axios from 'axios';
import { normalize } from 'normalizr';
import * as schema from './schema';

import * as types from './../types';
import { getIsFetching } from '../reducers/goods';

export const addGoodInCart = good => dispatch => {
  dispatch({
    type: types.ADD_GOOD_REQUEST,
    good
  });

  return axios
    .all([
      axios.put(`http://localhost:3000/all/${good.id}`, {
        ...good,
        inCart: true
      }),
      axios.post(`http://localhost:3000/cart`, good)
    ])
    .then(
      axios.spread((acct, perms) => {
        dispatch({
          type: types.ADD_GOOD_SUCCESS,
          payload: acct.data,
          count: 1
        });
      })
    );
};

export const removeGoodFromCart = good => dispatch => {
  dispatch({
    type: types.REMOVE_GOOD_STARTED
  });

  return axios
    .all([
      axios.put(`http://localhost:3000/all/${good.id}`, {
        ...good,
        inCart: false
      }),
      axios.delete(`http://localhost:3000/cart/${good.id}`)
    ])
    .then(
      axios.spread((acct, perms) => {
        dispatch({
          type: types.REMOVE_GOOD_SUCCESS,
          payload: acct.data
        });
      })
    );
};

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

export const fetchGoodsInCart = () => dispatch => {
  dispatch({
    type: types.FETCH_GOODS_IN_CART_REQUEST
  });

  return axios.get(`http://localhost:3000/cart`).then(
    response => {
      dispatch({
        type: types.FETCH_GOODS_IN_CART_SUCCESS,
        response: response.data
      });
    },
    error =>
      dispatch({
        type: types.FETCH_GOODS_IN_CART_FAILURE,
        message: error.message || 'Something went wrong'
      })
  );
};
