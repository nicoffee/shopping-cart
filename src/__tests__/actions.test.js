import * as actions from './../actions'
import * as types from './../types'

describe('actions', () => {
  it('should create an action to add good in cart', () => {
    const good = 'Monitor'
    const expectedAction = {
      type: types.ADD_GOOD,
      good
    }
    expect(actions.addGoodInCart(good)).toEqual(expectedAction)
  })

  it('should create an action to remove good from cart', () => {
    const id = '4'
    const expectedAction = {
      type: types.REMOVE_GOOD,
      id
    }
    expect(actions.removeGoodFromCart(id)).toEqual(expectedAction)
  })
})
