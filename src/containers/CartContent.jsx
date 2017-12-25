import { connect } from 'react-redux'

import CartPage from './../components/CartPage'

const mapStateToProps = state => ({ goodsInCart: state.goodsInCart })

const CartContent = connect(mapStateToProps)(CartPage)

export default CartContent
