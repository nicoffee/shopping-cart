export const good = (state, action) => {
    switch (action.type) {
        case 'ADD_GOOD':
            console.log('action.sum', action.sum);
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
    switch (action.type) {
        case 'ADD_GOOD':
            return {arr: [
                ...state,
                good(undefined, action),
            ], sum: action.sum};
        case 'REMOVE_GOOD':
            return state;
        case 'FILTER_GOODS':
            return state;
        default:
            return state;
    }
};

export const filter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'FILTER_GOODS':
            return state;
        default:
            return state;
    }
};