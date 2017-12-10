import { combineReducers } from 'redux'
import byId, * as fromById from './byId'
import createList, * as fromList from './createList'

const listByFilter = combineReducers({
  all: createList('all'),
  monitors: createList('monitors'),
  cases: createList('cases')
})

const goods = combineReducers({
  byId,
  listByFilter
})

export default goods

export const getVisibleGoods = (state, filter) => {
  const ids = fromList.getIds(state.goods.listByFilter[filter])
  return ids.map(id => fromById.getGood(state.goods.byId, id))
}
getIsFetching
export const getIsFetching = (state, filter) =>
  fromList.getIsFetching(state.goods.listByFilter[filter])
