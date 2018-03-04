const byId = (state = {}, action) => {
  if (action.type === 'ADD_GOOD_SUCCESS') {
    const newState = Object.assign({}, state);
    newState[action.response.id] = action.response;

    return newState;
  }

  if (action.response && action.response.entities) {
    return {
      ...state,
      ...action.response.entities.goods
    };
  }

  return state;
};

export default byId;

export const getGood = (state, id) => state[id];
