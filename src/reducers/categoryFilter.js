import {SET_CATEGORY_FILTER} from './../actions'
import {VisibilityFilters} from './../actions'

const SHOW_ALL = VisibilityFilters;

export const filter = (state = SHOW_ALL, action) => {
    switch (action.type) {
        case SET_CATEGORY_FILTER:
            return ({
                filter: action.filter
            });
        default:
            return state;
    }
};