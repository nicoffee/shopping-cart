import React from 'react'
import { connect } from 'react-redux'
import { addGood } from './../../actions'

let ShoppingCart = ({dispatch}) => {
    return (
      <div>
          <button onClick={() => dispatch(addGood())}>
              Add Goodie
          </button>
      </div>
    )
};
ShoppingCart = connect()(ShoppingCart);

export default ShoppingCart;