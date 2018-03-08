import { combineReducers } from 'redux';
import * as types from './../types';

const goods = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_GOODS_IN_CART_SUCCESS:
      return action.response;
    // totalPrice: (state.totalPrice - action.price).toFixed(2)
    case types.ADD_GOOD_REQUEST_STARTED:
      return state;
    case types.ADD_GOOD_SUCCESS:
      return [...state, action.payload];
    case types.REMOVE_GOOD_SUCCESS:
      return {
        ...state,
        goods: state.filter(good => good.id !== action.payload)
        // totalPrice: (state.totalPrice - action.price).toFixed(2)
      };
    case types.INCREASE_GOOD_AMOUNT:
      return {
        ...state,
        goods: [
          {
            ...state.goods.filter(good => good.id === action.id)[0],
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
    case types.FETCH_GOODS_IN_CART_SUCCESS:
      return action.response.reduce((acc, item) => acc + item.price, 0);
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
