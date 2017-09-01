export const good = (state, action) => {
    switch (action.type) {
        case 'ADD_GOOD':
            return {
                name: action.name,
                id: action.id
            };
        case 'REMOVE_GOOD':
            return state;
        default:
            return state;
    }
};

export const goods = (state = [], action) => {
    console.log('ACTION', action);
    switch (action.type) {
        case 'ADD_GOOD':
            return ([
                ...state,
                good(undefined, action),
            ]);
        case 'REMOVE_GOOD':
            return state;
        case 'SUCCESS_REQUEST':
            return action.goods;
        default:
            return state;
    }
};

export const filter = (state = 'ALL', action) => {
    console.log('STATE', state);
    switch (action.filter) {
        case 'CASES':
            return action.filter;
        default:
            return state;
    }
};

// export const successGoodsRequest = (state = [], action) => {
//     switch (action.type) {
//         case 'SUCCESS_REQUEST':
//             return state;
//         default:
//             return state;
//     }
// };