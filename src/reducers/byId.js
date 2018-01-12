const byId = (state = {}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.goods
    };
  }
  return state;
};

export default byId;

export const getGood = (state, id) => state[id];
