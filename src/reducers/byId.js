import * as types from './../types';

const byId = (state = {}, action) => {
  if (action.type === types.ADD_GOOD_SUCCESS) {
    const newState = Object.assign({}, state);
    newState[action.payload.id] = action.payload;

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
