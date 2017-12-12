import axios from 'axios'

import {
  ADD_GOOD,
  REMOVE_GOOD,
  FETCH_GOODS_REQUEST,
  FETCH_GOODS_SUCCESS,
  FETCH_GOODS_FAILURE
} from './../types'
import { getIsFetching } from '../reducers/goods'

export const addGoodInCart = ({ img, name, price, rating }) => ({
  type: ADD_GOOD,
  img,
  name,
  price,
  rating
})

export const removeGoodFromCart = id => ({
  type: REMOVE_GOOD,
  id
})

export const fetchGoods = filter => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve()
  }

  dispatch({
    type: FETCH_GOODS_REQUEST,
    filter
  })

  return axios.get(`http://localhost:3000/${filter}`).then(
    response =>
      dispatch({
        type: FETCH_GOODS_SUCCESS,
        filter,
        response
      }),
    error =>
      dispatch({
        type: FETCH_GOODS_FAILURE,
        filter,
        message: error.message || 'Something went wrong'
      })
  )
}
