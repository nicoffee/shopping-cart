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
        inCart: true,
        count: 1
      }),
      axios.post(`http://localhost:3000/cart`, good)
    ])
    .then(
      axios.spread((acct, perms) => {
        console.log('acct', acct);
        console.log('perms', perms);

        dispatch({
          type: types.ADD_GOOD_SUCCESS,
          payload: acct.data
        });
        // Both requests are now complete
      })
    );

  // axios
  //   .put(`http://localhost:3000/all/${good.id}`, { ...good, inCart: true })
  //   .then(
  //     response =>
  //       dispatch({
  //         type: types.ADD_GOOD_SUCCESS,
  //         payload: response.data.id
  //       }),
  //     error =>
  //       dispatch({
  //         type: types.ADD_GOOD_FAILURE,
  //         message: error.message || 'Something went wrong'
  //       })
  //   );

  // return axios.post(`http://localhost:3000/cart`, good).then(
  //   response =>
  //     dispatch({
  //       type: types.ADD_GOOD_SUCCESS,
  //       response: response.data
  //     }),
  //   error =>
  //     dispatch({
  //       type: types.ADD_GOOD_FAILURE,
  //       message: error.message || 'Something went wrong'
  //     })
  // );
};

export const removeGoodFromCart = (id, price) => dispatch => {
  dispatch({
    type: types.REMOVE_GOOD_STARTED,
    id,
    price
  });

  return axios.delete(`http://localhost:3000/cart/${id}`).then(
    response =>
      dispatch({
        type: types.REMOVE_GOOD_SUCCESS,
        payload: id
      }),
    error =>
      dispatch({
        type: types.REMOVE_GOOD_FAILURE,
        message: error.message || 'Something went wrong'
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
