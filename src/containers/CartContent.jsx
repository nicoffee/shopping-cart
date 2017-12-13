import { connect } from 'react-redux'

import CartPreview from './../components/CartPreview'

const mapStateToProps = state => {
  console.log('state', state)
  return {
    goodsInCart: state.goodsInCart
  }
}

const CartContent = connect(mapStateToProps)(CartPreview)

export default CartContent
