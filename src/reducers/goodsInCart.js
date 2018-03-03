import { combineReducers } from 'redux';
import * as types from './../types';
import createList, * as fromList from './createList';

const goods = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_GOODS_IN_CART_REQUEST_SUCCESS:
      return action.response;
    // totalPrice: (state.totalPrice - action.price).toFixed(2)
    case types.ADD_GOOD_REQUEST_STARTED:
      return state;
    case types.ADD_GOOD_SUCCESS:
      return [...state, action.response];
    case types.REMOVE_GOOD:
      return {
        ...state,
        goods: state.goods.filter(good => good.id !== action.id)
        // totalPrice: (state.totalPrice - action.price).toFixed(2)
      };
    case types.INCREASE_GOOD_AMOUNT:
      const selectedGood = state.goods.filter(good => good.id === action.id)[0];
      return {
        ...state,
        goods: [
          {
            ...selectedGood,
            count: action.count
            // totalPrice: (action.count * selectedGood.price).toFixed(2)
          },
          ...state.goods.filter(good => good.id !== action.id)
        ]
      };
    case types.CALC_SUM:
      return {
        ...state
        // totalPrice: state.goods.reduce(
        //   (sum, item) => +sum + +item.totalPrice,
        //   0
        // )
      };
    default:
      return state;
  }
};

const totalPrice = (state = 0, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const goodsInCart = combineReducers({
  goods,
  totalPrice
});

export default goodsInCart;

export const getGoodsInCart = state => {
  console.log('state', state);
  return state.goodsInCart.goods;
};
