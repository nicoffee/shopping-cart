const byId = (state = {}, action) => {
  console.log('state', state);
  console.log('action', action);

  switch (action.type) {
    case 'ADD_GOOD_SUCCESS':
      const newObj = Object.assign({}, state);
      newObj[action.response.id] = Object.assign({}, {...newObj[action.response.id], action.response});
      return newObj;
  }

  if (action.response) {
    return {
      ...state,
      ...action.response.entities.goods || action.response
    };
  }
  return state;
};

export default byId;

export const getGood = (state, id) => state[id];

// const updateGoods = (state = {}, action) => {
//   switch (action.type) {
//     case 'ADD_GOOD_SUCCESS':
//       console.log('action', action);
//       return state;
//     default:
//       return state;
//   }
// };
