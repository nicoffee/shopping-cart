import {v4} from 'node-uuid'

export const addGood = (img, name, vendor, price, rating) => ({
    type: 'ADD_GOOD',
    id: v4(),
    img,
    name,
    vendor,
    price,
    rating
});


export const setCategoryFilter = (filter) => ({
    type: 'SET_CATEGORY_FILTER',
    filter
});

export const successGoodsRequest = (data) => ({
    type: 'SUCCESS_REQUEST',
    data
});