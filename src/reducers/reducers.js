import {ADD_GOOD, REMOVE_GOOD, GOODS_REQUEST, GOODS_SUCCESS, GOODS_FAILURE} from './../actions'


export const good = (state, action) => {
    switch (action.type) {
        case ADD_GOOD:
            return {
                name: action.name,
                id: action.id
            };
        case REMOVE_GOOD:
            return state;
        default:
            return state;
    }
};

export const goods = (state = {
    isFetching: false,
    goods: []
}, action) => {
    switch (action.type) {
        case GOODS_REQUEST:
            return {
                isFetching: true
            };
        case GOODS_SUCCESS:
            return {
                goods: action.goods,
                isFetching: false
            };
        case GOODS_FAILURE:
            return {
                error: action.error,
                isFetching: false
            };
        default:
            return state;
    }
};

export const goodsInCart = (state = [], action) => {
    console.log('state', state);
    console.log('action', action);
    switch (action.type) {
        case ADD_GOOD:
            return [
                ...state,
                {
                    name: action.name,
                    price: action.price
                }
            ];
        case REMOVE_GOOD:
            return state;
        default:
            return state;
    }
};
