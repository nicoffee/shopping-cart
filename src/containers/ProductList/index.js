import React, {Component} from 'react';
import {connect} from 'react-redux';
import Product from '../../components/Product'

const mapStateToProps = ({goods}) => ({goods});

const ProductList = ({goods, onProductClick}) => {
    return (
      <Product
        img="https://cdn.shopify.com/s/files/1/0232/4705/products/Enthoo_Pro_White.png?v=1405467646"
        name="Phanteks Enthoo Pro Chassis White" />
    )
};

const FilteredProductList = connect(mapStateToProps)(ProductList);

export default FilteredProductList;