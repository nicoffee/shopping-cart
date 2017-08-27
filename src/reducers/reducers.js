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
    switch (action.type) {
        case 'ADD_GOOD':
            return ([
                ...state,
                good(undefined, action),
            ]);
        case 'REMOVE_GOOD':
            return state;
        default:
            return state;
    }
};

export const filter = (state = 'SHOW_ALL', action) => {
    switch (action.filter) {
        case 'CASES':
            return state;
        default:
            return state;
    }
};