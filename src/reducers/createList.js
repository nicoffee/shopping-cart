import { combineReducers } from 'redux'
import {
  FETCH_GOODS_REQUEST,
  FETCH_GOODS_SUCCESS,
  FETCH_GOODS_FAILURE
} from './../types'

const createList = filter => {
  const ids = (state = [], action) => {
    if (action.filter !== filter) {
      return state
    }
    switch (action.type) {
      case FETCH_GOODS_SUCCESS:
        return action.response.result
      default:
        return state
    }
  }

  const isFetching = (state = false, action) => {
    if (action.filter !== filter) {
      return state
    }
    switch (action.type) {
      case FETCH_GOODS_REQUEST:
        return true
      case FETCH_GOODS_SUCCESS:
      case FETCH_GOODS_FAILURE:
        return false
      default:
        return state
    }
  }

  const errorMessage = (state = null, action) => {
    if (action.filter !== filter) {
      return state
    }
    switch (action.type) {
      case FETCH_GOODS_FAILURE:
        return action.message
      case FETCH_GOODS_REQUEST:
      case FETCH_GOODS_SUCCESS:
        return null
      default:
        return state
    }
  }

  return combineReducers({
    ids,
    isFetching,
    errorMessage
  })
}

export default createList

export const getIds = state => state.ids
export const getIsFetching = state => state.isFetching
export const getErrorMessage = state => state.errorMessage
