import { combineReducers } from 'redux';
import * as types from './../types';

const goods = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_GOODS_IN_CART_SUCCESS:
      return action.response;
    case types.ADD_GOOD_REQUEST_STARTED:
      return state;
    case types.ADD_GOOD_IN_CART_SUCCESS:
      return [...state, action.payload];
    case types.REMOVE_GOOD_SUCCESS:
      return {
        ...state,
        goods: state.filter(good => good.id !== action.payload)
      };
    case types.CHANGE_GOOD_AMOUNT:
      const filteredGood = state.filter(
        good => good.id === action.payload.id
      )[0];
      filteredGood.count = action.count;
      return [
        ...state.filter(good => good.id !== action.payload.id),
        filteredGood
      ];
    default:
      return state;
  }
};

const totalPrice = (state = 0, action) => {
  switch (action.type) {
    case types.FETCH_GOODS_IN_CART_SUCCESS:
      return action.response.reduce(
        (acc, item) => (acc + item.price * item.count).toFixed(2),
        0
      );
    case types.CHANGE_GOOD_AMOUNT:
      return (+state + +(action.payload.price * action.payload.count)).toFixed(
        2
      );
    default:
      return state;
  }
};

const goodsInCart = combineReducers({
  goods,
  totalPrice
});

export default goodsInCart;

export const getGoodsInCart = state => state.goodsInCart.goods;
