import React from 'react'
import {connect} from 'react-redux'

const CartPage = ({goodsInCart}) => (
    <div>
        <h1>Cart</h1>
        <ul>
            {goodsInCart.map((good, idx) => (
                <li key={idx}>
                    {good.name}
                </li>
            ))}
        </ul>
    </div>
);

export default connect(({goodsInCart}) => ({goodsInCart}))(CartPage);