import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const goodsList = goods => goods.map((item, idx) => {
    return (
        <li key={idx}>
            {item.name}
        </li>
    )
});

const CartPreview = (props) => (
    <div>
        Товаров в корзине: {props.goodsInCart.length}
        <br/>
        Товары:
        <ul>
            {goodsList(props.goodsInCart)}
        </ul>
        <Link to="/cart">View Cart</Link>
    </div>
);

CartPreview.propTypes = {
    goodsInCart: PropTypes.array
};

export default CartPreview;
