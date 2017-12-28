import { connect } from 'react-redux'
import CartPage from './../components/CartPage'

const mapStateToProps = state => ({
  allIds: state.goodsInCart.allIds,
  byId: state.goodsInCart.byId.goods,
  price: state.goodsInCart.byId.totalPrice
})

const CartContent = connect(mapStateToProps)(CartPage)

export default CartContent
