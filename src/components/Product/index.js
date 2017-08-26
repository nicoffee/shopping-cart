import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addGood} from './../../actions'
import styles from './style.css'

const Product = ({dispatch, img, name, vendor, price, rating}) => (
    <div className={styles.product}>
        <img src={img}/>
        <span>{name}</span>
        <span>{vendor}</span>
        <span>${price}</span>
        <div className="rating">
            {rating}/5
        </div>
        <button onClick={() => dispatch(addGood(img, name, vendor, price, rating))}>
            Add to Cart
        </button>
    </div>
);

Product.propTypes = {
    dispatch: PropTypes.func.isRequired,
    img: PropTypes.string,
    name: PropTypes.string,
    vendor: PropTypes.string,
    price: PropTypes.number.isRequired,
    rating: PropTypes.string
};

export default connect()(Product)