import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import PropTypes from 'prop-types'
import Product from '../components/Product'
import styles from './ProductList.css'
import {successGoodsRequest} from './../actions'

const mapStateToProps = ({goods}) => ({ goods: goods });

class ProductList extends Component {
    componentDidMount() {
        axios.get('http://localhost:3000/goods')
            .then((res) => {
                this.props.dispatch(successGoodsRequest(res.data));
            })
            .catch((err) => {
                this.props.dispatch({
                    type: 'ERROR_REQUEST',
                    error: err
                });
            });
    }

    render() {
        const goods = this.props.goods;

        let goodsToRender = Object.keys(goods).map((good, idx) => {
            return goods[good].map((i) => (
                    <Product
                        img={i.img}
                        name={i.name}
                        vendor={i.vendor}
                        price={i.price}
                        rating={i.rating}
                        vendor_code={i.vendor_code}
                    />
                ))
        })

        return (
            <div className={styles.goodsContainer}>
                {goodsToRender}
            </div>
        )
    }
}

ProductList.propTypes = {
    dispatch: PropTypes.func.isRequired
};

const FilteredProductList = connect(mapStateToProps)(ProductList);

export default FilteredProductList;