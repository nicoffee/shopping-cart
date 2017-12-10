import axios from 'axios'

import {
  ADD_GOOD,
  REMOVE_GOOD,
  SET_CATEGORY_FILTER,
  REQUEST_GOODS,
  RECEIVE_GOODS
} from './../types'

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

export const setCategoryFilter = filter => ({
  type: SET_CATEGORY_FILTER,
  filter
})

const requestGoods = filter => ({
  type: REQUEST_GOODS,
  filter
})

const receiveGoods = (filter, response) => ({
  type: RECEIVE_GOODS,
  filter,
  response
})

export const fetchGoods = filter => dispatch => {
  dispatch(requestGoods(filter))

  return axios
    .get(`http://localhost:3000/${filter}`)
    .then(response => dispatch(receiveGoods(filter, response)))
}
