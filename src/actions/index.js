import {
  ADD_GOOD,
  SET_CATEGORY_FILTER,
  GOODS_REQUEST,
  GOODS_SUCCESS,
  GOODS_FAILURE
} from './../types';

export const addGoodInCart = ({img, name, price, rating}) => ({
    type: ADD_GOOD,
    img,
    name,
    price,
    rating
});

export const setCategoryFilter = filter => ({
    type: SET_CATEGORY_FILTER,
    filter
});

export const goodsRequest = data => ({
    type: GOODS_REQUEST,
    goods: data
});

export const successGoodsRequest = data => ({
    type: GOODS_SUCCESS,
    goods: data
});

export const errorGoodsRequest = error => ({
    type: GOODS_FAILURE,
    goods: error
});

export function fetchGoods() {
    return function (dispatch) {
        dispatch(requestGoods());

        return fetch(`http://localhost:3000/goods/`)
            .then(
                response => response.json(),
                error => console.log('An error occured.', error)
            )
            .then(
                json => dispatch(receiveGoods(json))
            )
    }
}
