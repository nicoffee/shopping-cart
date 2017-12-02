import {
  ADD_GOOD,
  REMOVE_GOOD,
  GOODS_REQUEST,
  GOODS_SUCCESS,
  GOODS_FAILURE
} from './../types'
import axios from 'axios'

export const good = (state, action) => {
  switch (action.type) {
    case ADD_GOOD:
      return {
        name: action.name,
        id: action.id
      }
    case REMOVE_GOOD:
      return state
    default:
      return state
  }
}

const goods = (
  state = {
    isFetching: false,
    goods: []
  },
  action
) => {
  switch (action.type) {
    case GOODS_REQUEST:
      return {
        isFetching: true
      }
    case GOODS_SUCCESS:
      return {
        goods: action.goods,
        isFetching: false
      }
    case GOODS_FAILURE:
      return {
        error: action.error,
        isFetching: false
      }
    default:
      return state
  }
}

export default goods

export const getVisibleGoods = (state, filter) => {
  axios
    .get('http://localhost:3000/goods')
    .then(response => {
      switch (filter) {
        case 'ALL':
          let allGoods = []
          Object.keys(response.data).map(key => {
            allGoods = allGoods.concat(response.data[key])
          })
          return allGoods
      }
    })
    .catch(function(error) {
      console.log(error)
    })

  return state
}
