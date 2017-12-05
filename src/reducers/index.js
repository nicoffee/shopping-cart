import { combineReducers } from 'redux'
import goodsInCart from './goodsInCart'
import goods, * as fromGoods from './goods'

const rootReducer = combineReducers({
  goodsInCart,
  goods
})

export default rootReducer

export const getVisibleGoods = (state, filter) =>
  fromGoods.getVisibleGoods(state.goods, filter)
