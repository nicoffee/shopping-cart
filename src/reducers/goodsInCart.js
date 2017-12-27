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
          [action.good.id]: {
            name: action.good.name,
            price: action.good.price
          }
        },
        totalPrice: (+action.good.price + +state.totalPrice).toFixed(2)
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
      return [...state, action.good.id]
    default:
      return state
  }
}

const goodsInCart = combineReducers({
  byId,
  allIds
})

export default goodsInCart

export const getGoodsInCart = state => {
  return state.goodsInCart.byId.goods
}
