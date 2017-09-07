import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import axios from 'axios'
import Product from '../components/Product'
import {successGoodsRequest} from './../actions'

const mapStateToProps = ({goods, filter}) => ({goods, filter});

const getCategoryGoods = (goods, filter) => {
    console.log('goods', goods);
    console.log('filter', filter.filter);
    switch (filter.filter) {
        case 'CASES':
            return (
                goods.cases.map((good, idx) => (
                    <Product
                        img={good.img}
                        name={good.name}
                        vendor={good.vendor}
                        price={good.price}
                        rating={good.rating}
                        vendor_code={good.vendor_code}
                        key={idx}
                    />)
                ));
        default: return (Object.keys(goods).map((key) => (
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
        )))
    }
};


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
        const {goods, filter} = this.props;

        return (
            <div>
                {getCategoryGoods(goods, filter)}
            </div>
        )
    }
}

ProductList.propTypes = {
    goods: PropTypes.object.isRequired,
    filter: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

const FilteredProductList = connect(mapStateToProps)(ProductList);

export default FilteredProductList;