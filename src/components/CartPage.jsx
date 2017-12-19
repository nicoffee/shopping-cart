import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const CartPage = ({ goodsInCart }) => (
  <div>
    <h1>Cart</h1>
    <ul>
      {goodsInCart.allIds.map((good, idx) => <li key={idx}>{good.name}</li>)}
    </ul>
  </div>
)

CartPage.propTypes = {
  goodsInCart: PropTypes.object
}

export default connect(({ goodsInCart }) => ({ goodsInCart }))(CartPage)
