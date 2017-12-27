import { connect } from 'react-redux'
import { getGoodsInCart } from './../reducers/goodsInCart'

import CartPage from './../components/CartPage'

const mapStateToProps = state => {
  return {
    allIds: state.goodsInCart.allIds,
    byId: state.goodsInCart.byId.goods
  }
}

const CartContent = connect(mapStateToProps)(CartPage)

export default CartContent
