import {SET_CATEGORY_FILTER} from './../actions'
import {CategoryFilters} from './../actions'

const {SHOW_ALL} = CategoryFilters;

export const categoryFilter = (state = SHOW_ALL, action) => {
    switch (action.type) {
        case SET_CATEGORY_FILTER:
            return action.filter;
        default:
            return state;
    }
};