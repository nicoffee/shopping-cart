import React from 'react'
import PropTypes from 'prop-types'

const goodsList = goods => goods.map((item, idx) => {
    return (
        <li key={idx}>
            {item.name}
        </li>
    )
});

const CartPreview = (props) => {console.log('props', props); return (

    <div>
        Товаров в корзине: {props.goodsInCart.length}
        <br/>
        Товары:
        <ul>
            {goodsList(props.goodsInCart)}
        </ul>
        {/*<Link to="/cart">View Cart</Link>*/}
    </div>
)};

CartPreview.propTypes = {
    // count: PropTypes.number,
    // goods: PropTypes.array,
};

export default CartPreview;
