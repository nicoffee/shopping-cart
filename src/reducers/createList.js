import { RECEIVE_GOODS } from './../types'

const createList = filter => {
  return (state = [], action) => {
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
}

export default createList

export const getIds = state => state
