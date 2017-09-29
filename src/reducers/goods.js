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

import {goodsFromDb} from './../../db.json'

const byId = (state = {
    isFetching: false,
    goods: []
}, action) => {
    switch (action.type) {
        case ADD_GOOD:
        case REMOVE_GOOD:
            return {
                ...state,
                [action.id]: good(state[action.id], action),
            };
        default:
            return state;
    }
};

const allIds = (state = [], action) => {

    }   
};

export default goods;

export const getVisibleGoods = (state, filter) => {
    let allGoods = [];
    Object.keys(state).map(key => allGoods = allGoods.concat(state[key]));

    switch (filter) {
        case 'all':
            return allGoods;
        case 'cases':
            return state.cases;
        case 'monitors':
            return state.monitors
    }
};