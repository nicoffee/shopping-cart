// import { addGood } from "../actions/index"

let action = {
    type: 'ADD_GOOD'
};

const reducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_GOOD':
            console.log('ADD GOODIE !!!');
        default:
            return state;
    }
};

export default reducer;