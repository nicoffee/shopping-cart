import {ADD_GOOD, REMOVE_GOOD, SUCCESS_REQUEST, SET_CATEGORY_FILTER} from './../actions'
import {VisibilityFilters} from './../actions'

const SHOW_ALL = VisibilityFilters;


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

export const filter = (state = SHOW_ALL, action) => {
    switch (action.type) {
        case SET_CATEGORY_FILTER:
            return action.filter;
        default:
            return state;
    }
};