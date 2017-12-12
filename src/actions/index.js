import axios from 'axios'

import { ADD_GOOD, REMOVE_GOOD, REQUEST_GOODS, RECEIVE_GOODS } from './../types'
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
    type: REQUEST_GOODS,
    filter
  })

  return axios.get(`http://localhost:3001/${filter}`).then(response =>
    dispatch({
      type: RECEIVE_GOODS,
      filter,
      response
    })
  )
}
