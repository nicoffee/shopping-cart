import { combineReducers } from 'redux'
import { REQUEST_GOODS, RECEIVE_GOODS } from './../types'

const createList = filter => {
  const ids = (state = [], action) => {
    if (action.filter !== filter) {
      return state
    }
    switch (action.type) {
      case RECEIVE_GOODS:
        return action.response.data.map(good => good.id)
      default:
        return state
    }
  }

  const isFetching = (state = false, action) => {
    if (action.filter !== filter) {
      return state
    }
    switch (action.type) {
      case REQUEST_GOODS:
        return true
      case RECEIVE_GOODS:
        return false
      default:
        return state
    }
  }

  return combineReducers({
    ids,
    isFetching
  })
}

export default createList

export const getIds = state => state.ids
export const getIsFetching = state => state.isFetching
