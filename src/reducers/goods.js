import { combineReducers } from 'redux'
import { GOODS_REQUEST, GOODS_FAILURE, RECEIVE_GOODS } from './../types'

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_GOODS:
      const nextState = { ...state }
      action.response.data.forEach(good => {
        nextState[good.id] = good
      })
      return nextState
    default:
      return state
  }
}

const allIds = (state = [], action) => {
  if (action.filter !== 'all') {
    return state
  }
  switch (action.type) {
    case RECEIVE_GOODS:
      return action.response.data.map(good => good.id)
    default:
      return state
  }
}

const monitorsIds = (state = [], action) => {
  if (action.filter !== 'monitors') {
    return state
  }
  switch (action.type) {
    case RECEIVE_GOODS:
      return action.response.data.map(good => good.id)
    default:
      return state
  }
}

const casesIds = (state = [], action) => {
  if (action.filter !== 'cases') {
    return state
  }
  switch (action.type) {
    case RECEIVE_GOODS:
      return action.response.data.map(good => good.id)
    default:
      return state
  }
}

const idsByFilter = combineReducers({
  all: allIds,
  monitors: monitorsIds,
  cases: casesIds
})

const goods = combineReducers({
  byId,
  idsByFilter
})

export default goods

export const getVisibleGoods = (state, filter) => {
  const ids = state.goods.idsByFilter[filter]
  return ids.map(id => state.goods.byId[id])
}
