import React from 'react'
import PropTypes from 'prop-types'

const CartPage = ({ allIds, byId }) => {
  return (
    <div>
      <h1>Cart</h1>
      <ul>{allIds.map((id, idx) => <li key={idx}>{byId[id].name}</li>)}</ul>
    </div>
  )
}

CartPage.propTypes = {
  goodsInCart: PropTypes.object
}

export default CartPage
