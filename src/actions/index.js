import {v4} from 'node-uuid'

export const addGood = (name) => ({
    type: 'ADD_GOOD',
    id: v4(),
    name
});


export const setCategoryFilter = (filter) => ({
    type: 'SET_CATEGORY_FILTER',
    filter
});