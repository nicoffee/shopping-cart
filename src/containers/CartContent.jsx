import { connect } from 'react-redux'
import { getGoodsInCart } from './../reducers/goodsInCart'

import CartPage from './../components/CartPage'

const mapStateToProps = state => ({ goodsInCart: getGoodsInCart(state) })

const CartContent = connect(mapStateToProps)(CartPage)

export default CartContent
