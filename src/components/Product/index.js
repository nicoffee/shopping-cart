import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'

const Product = () => {
    return (
      <div className="product">
          <img src="https://cdn.shopify.com/s/files/1/0232/4705/products/Enthoo_Pro_White.png?v=1405467646" alt=""/>
          <span>Phanteks Enthoo Pro Chassis White</span>
          <button>Add to Cart</button>
      </div>
    )
};

// TextArea.propTypes = {
//
// }

export default Product