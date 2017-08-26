import React from 'react'
import {connect} from 'react-redux'
import styles from './style.css'
import {addGood} from './../../actions'

let Product = ({dispatch, img, name, vendor, price, rating}) => (
    <div className={styles.product}>
        <img src={img}/>
        <span>{name}</span>
        <span>{vendor}</span>
        <span>${price}</span>
        <div className="rating">
            {rating}/5
        </div>
        <button onClick={ () => dispatch(addGood(name, price)) }>
            Add to Cart
        </button>
    </div>
);

export default connect()(Product)