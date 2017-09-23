import {
    ADD_GOOD, 
    REMOVE_GOOD
} from './../types'

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
