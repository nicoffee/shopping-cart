import { combineReducers } from 'redux'
import { ADD_GOOD, REMOVE_GOOD } from './../types'

const byId = (
  state = {
    goods: {},
    totalPrice: 0
  },
  action
) => {
  switch (action.type) {
    case ADD_GOOD:
      return {
        goods: {
          ...state.goods,
          [action.response.data.id]: {
            name: action.response.data.name,
            price: action.response.data.price
          }
        },
        totalPrice: (+action.response.data.price + +state.totalPrice).toFixed(2)
      }
    case REMOVE_GOOD:
      return state
    default:
      return state
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
    case ADD_GOOD:
      return [...state, action.response.data.id]
    default:
      return state
  }
}

const goodsInCart = combineReducers({
  byId,
  allIds
})

export default goodsInCart
