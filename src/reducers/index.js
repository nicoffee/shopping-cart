import { combineReducers } from 'redux';
import goodsInCart from './goodsInCart';
import goods from './goods';

// const updateGoods = (state = {}, action) => {
//   switch (action.type) {
//     case 'ADD_GOOD_SUCCESS':
//       console.log('action', action);
//       return state;
//     default:
//       return state;
//   }
// };

const rootReducer = combineReducers({
  goodsInCart,
  goods
});

export default rootReducer;
