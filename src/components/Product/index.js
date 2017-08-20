import React from 'react'
import {connect} from 'react-redux'
import styles from './style.css'
import addGood from './../../actions'

let Product = ({img, name, dispatch}) => (
        <div className={styles.product}>
            <img src={img}/>
            <span>{name}</span>
            <button onClick={ () => dispatch(addGood(name)) }>
                Add to Cart
            </button>
        </div>
    )

export default connect()(Product)