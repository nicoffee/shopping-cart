import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const goodsList = (goods) => goods.map((item, idx) => {
    return (
        <li key={idx}>
            {item.name}
        </li>
    )
});

const CartPreview = ({count, goods}) => {
    return (
        <div>
            Товаров в корзине: {count}
            <br/>
            Товары:
            <ul>
                {goodsList(goods)}
            </ul>
            <Link to="/cart">View Cart</Link>
        </div>
    )
};

CartPreview.propTypes = {
    count: PropTypes.number.isRequired,
    goods: PropTypes.number.isRequired,
};

export default CartPreview;