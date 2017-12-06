import { combineReducers } from 'redux'
import { ADD_GOOD, REMOVE_GOOD } from './../types'

const byId = (
  state = {
    goods: {},
    totalPrice: 0
  },
  action
) => {
  const totalPrice = (+action.price + +state.totalPrice).toFixed(2)
  switch (action.type) {
    case ADD_GOOD:
      return {
        goods: {
          ...state.goods,
          [action.id]: {
            name: action.name,
            price: action.price
          }
        },
        totalPrice
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
      return [...state, action.id]
    default:
      return state
  }
}

const goodsInCart = combineReducers({
  byId,
  allIds
})

export default goodsInCart
