import {ADD_GOOD, REMOVE_GOOD, SUCCESS_REQUEST} from './../actions'

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

export const goods = (state = [], action) => {
    switch (action.type) {
        case ADD_GOOD:
            return ([
                ...state,
                good(undefined, action),
            ]);
        case REMOVE_GOOD:
            return state;
        case SUCCESS_REQUEST:
            return action.goods;
        default:
            return state;
    }
};