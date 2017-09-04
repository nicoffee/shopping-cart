import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import axios from 'axios'
import {setCategoryFilter} from './../actions'
import Product from '../components/Product'
import styles from './ProductList.css'
import {successGoodsRequest} from './../actions'

const mapStateToProps = ({goods}) => ({goods});

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
        const {goods} = this.props;

        return (
            <div className={styles.goodsContainer}>
                {Object.keys(goods).map((key) => (
                    goods[key].map((good, idx) => (
                        <Product
                            img={good.img}
                            name={good.name}
                            vendor={good.vendor}
                            price={good.price}
                            rating={good.rating}
                            vendor_code={good.vendor_code}
                            key={idx}
                        />
                    ))
                ))};
            </div>
        )
    }
}

ProductList.propTypes = {
    goods: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

const FilteredProductList = connect(mapStateToProps)(ProductList);

export default FilteredProductList;