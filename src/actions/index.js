import { v4 } from 'node-uuid';

let nextGoodId = 0;

export const addGood = (name) => ({
    type: 'ADD_GOOD',
    name,
    id: v4()
});