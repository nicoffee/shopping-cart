import React from 'react'
import { Link } from 'react-router-dom'


const goodsList = (goods) => goods.map((item, idx) => {
    return (
        <li key={idx}>
            {item.name}
        </li>
    )
});

const CartPreview = ({count, goods}) => {
    console.log('goods', goods);
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

export default CartPreview;