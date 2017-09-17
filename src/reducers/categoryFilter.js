import {SET_CATEGORY_FILTER} from './../actions'
import {SHOW_ALL} from './../types'

export const categoryFilter = (state = SHOW_ALL, action) => {
    switch (action.type) {
        case SET_CATEGORY_FILTER:
            return action.filter;
        default:
            return state;
    }
};
