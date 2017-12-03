import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { addGoodInCart, removeGoodFromCart } from '../actions'
import { getVisibleGoods } from '../reducers/goods'
import GoodsList from '../components/GoodsList'

const mapStateToProps = (state, { match }) => {
  console.log('state', state)
  return {
    goods: getVisibleGoods(state, match.params.filter || 'all')
  }
}

const VisibleGoodsList = withRouter(
  connect(mapStateToProps, {
    onAddGoodClick: addGoodInCart,
    onRemoveGoodClick: removeGoodFromCart
  })(GoodsList)
)

export default VisibleGoodsList
