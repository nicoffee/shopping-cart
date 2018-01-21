import { combineReducers } from 'redux';
import { ADD_GOOD, REMOVE_GOOD } from './../types';

const byId = (
  state = {
    goods: [],
    totalPrice: 0
  },
  action
) => {
  switch (action.type) {
    case ADD_GOOD:
      console.log('action', action);
      console.log('state', state);

      return {
        goods: [...state.goods, action.good],
        totalPrice: (+action.good.price + +state.totalPrice).toFixed(2)
      };
    case REMOVE_GOOD:
      console.log(state);
      console.log(action);
      // const newObj = { ...state.goods };
      // delete newObj[action.id];
      // console.log('newObj', newObj);
      return {
        ...state,
        goods: state.goods.filter(good => good.id !== action.id)
      };
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case ADD_GOOD:
      return [...state, action.good.id];
    default:
      return state;
  }
};

const goodsInCart = combineReducers({
  byId,
  allIds
});

export default goodsInCart;

export const getGoodsInCart = state => {
  return state.goodsInCart.byId.goods;
};
