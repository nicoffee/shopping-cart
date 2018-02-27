import { combineReducers } from 'redux';
import goodsInCart from './goodsInCart';
import goods from './goods';

const rootReducer = combineReducers({
  goodsInCart,
  goods
});

export default rootReducer;
