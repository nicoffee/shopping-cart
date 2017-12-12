import { FETCH_GOODS_SUCCESS } from './../types'

const byId = (state = {}, action) => {
  switch (action.type) {
    case FETCH_GOODS_SUCCESS:
      const nextState = { ...state }
      action.response.data.forEach(good => {
        nextState[good.id] = good
      })
      return nextState
    default:
      return state
  }
}

export default byId

export const getGood = (state, id) => state[id]
