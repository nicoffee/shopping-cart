import {
    ADD_GOOD, 
    REMOVE_GOOD, 
    GOODS_REQUEST, 
    GOODS_SUCCESS, 
    GOODS_FAILURE
} from './../types'


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

export const goodsInCart = (state = {
    array: [], 
    totalPrice: 0
}, action) => {
    const totalPrice = (+action.price + +state.totalPrice).toFixed(2);
    switch (action.type) {
        case ADD_GOOD:
            return ({
                array: [
                    ...state.array,
                    {
                        name: action.name,
                        price: action.price
                    },
                ], 
                totalPrice: totalPrice
            })
        case REMOVE_GOOD:
            return state;
        default:
            return state;
    }
};
