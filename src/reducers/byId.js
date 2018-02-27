const byId = (state = {}, action) => {
  console.log('state', state);
  console.log('action', action);

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
