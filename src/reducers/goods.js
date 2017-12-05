import { GOODS_REQUEST, GOODS_FAILURE, RECEIVE_GOODS } from './../types'

const goods = (
  state = {
    isFetching: false,
    goods: []
  },
  action
) => {
  switch (action.type) {
    case GOODS_REQUEST:
      return {
        isFetching: true
      }
    case RECEIVE_GOODS:
      return {
        goods: action.response.data,
        isFetching: false
      }
    case GOODS_FAILURE:
      return {
        error: action.error,
        isFetching: false
      }
    default:
      return state
  }
}

export default goods

export const getVisibleGoods = (state, filter) => {
  switch (filter) {
    case 'all':
      return state.goods
  }
}
