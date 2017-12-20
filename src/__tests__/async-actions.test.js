import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'
import thunk from 'redux-thunk'
import * as actions from './../actions'
import * as types from './../types'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('creates FETCH_GOODS_SUCCESS when fetching goods has been done', () => {
    fetchMock.getOnce('/goods', {
      body: { goods: ['monitor'] },
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      { type: types.FETCH_GOODS_REQUEST },
      { type: types.FETCH_GOODS_SUCCESS, body: { goods: ['monitor'] } }
    ]
    const store = mockStore({ goods: [] })

    return store.dispatch(actions.fetchGoods()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
