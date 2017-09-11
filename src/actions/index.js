export const ADD_GOOD = 'ADD_GOOD';

export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';

export const GOODS_REQUEST = 'GOODS_REQUEST';
export const GOODS_SUCCESS = 'GOODS_SUCCESS';
export const GOODS_FAILURE = 'GOODS_FAILURE';

export const CategoryFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_CASES: 'SHOW_CASES',
    SHOW_MONITORS: 'SHOW_MONITORS'
};

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
