import { combineReducers } from 'redux';
import * as types from './../types';

const byId = (
  state = {
    goods: [],
    totalPrice: 0
  },
  action
) => {
  switch (action.type) {
    case types.ADD_GOOD_REQUEST_STARTED:
      return state;
    // return {
    //   goods: [
    //     ...state.goods,
    //     { ...action.good, count: 1, totalPrice: action.price }
    //   ],
    //   totalPrice: (+action.good.price + +state.totalPrice).toFixed(2)
    // };
    case types.REMOVE_GOOD:
      return {
        ...state,
        goods: state.goods.filter(good => good.id !== action.id),
        totalPrice: (state.totalPrice - action.price).toFixed(2)
      };
    case types.INCREASE_GOOD_AMOUNT:
      const selectedGood = state.goods.filter(good => good.id === action.id)[0];
      return {
        ...state,
        goods: [
          {
            ...selectedGood,
            count: action.count,
            totalPrice: (action.count * selectedGood.price).toFixed(2)
          },
          ...state.goods.filter(good => good.id !== action.id)
        ]
      };
    case types.CALC_SUM:
      return {
        ...state,
        totalPrice: state.goods.reduce(
          (sum, item) => +sum + +item.totalPrice,
          0
        )
      };
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case types.ADD_GOOD:
      return [...state, action.good.id];
    case types.REMOVE_GOOD:
      return [...state.filter(id => id !== action.id)];
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
