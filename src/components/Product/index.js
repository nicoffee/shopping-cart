import React from 'react'
import {connect} from 'react-redux';
import styles from './style.css'

let Product = ({img, name, dispatch}) => {
    return (
      <div className={styles.product}>
          <img src={img}/>
          <span>{name}</span>
          <button onClick={() => dispatch({type: 'ADD_GOOD', name})}>
              Add to Cart
          </button>
      </div>
    )
};

export default connect()(Product)