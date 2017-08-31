import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import PropTypes from 'prop-types'
import Product from '../components/Product'
import styles from './ProductList.css'

const mapStateToProps = (data) => (data);

class ProductList extends Component {
    componentDidMount() {
        axios.get('http://localhost:3000/goods')
            .then((res) => {
                this.props.dispatch({
                    type: 'SUCCESS_REQUEST',
                    data: res.data
                });
            })
            .catch((err) => {
                this.props.dispatch({
                    type: 'ERROR_REQUEST',
                    error: err
                });
            });
    }

    render() {
        console.log('this.props', this.props);
        // let goods = [];
        // const products = this.state.goods;
        // const categories = Object.keys(products);
        // categories.map((itm) => { products[itm].map((item, idx) => {
        //     const good = <Product
        //         img={item.img}
        //         name={item.name}
        //         vendor={item.vendor}
        //         price={item.price}
        //         rating={item.rating}
        //         vendor_code={item.vendor_code}
        //     />;
        //     goods.push(good);
        // }); } );

        return (
            <div className={styles.goodsContainer}>
                {/*{goods}*/}
            </div>
        )
    }
}

ProductList.propTypes = {
    dispatch: PropTypes.func.isRequired
};

const FilteredProductList = connect(mapStateToProps)(ProductList);

export default FilteredProductList;