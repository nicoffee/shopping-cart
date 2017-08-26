import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import Product from '../../components/Product'

const mapStateToProps = ({goods}) => ({goods});

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goods: []
            // img: "",
            // name: "",
            // vendor: "",
            // price: 0,
            // rating: 0,
            // vendor_code: ""
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3000/cases')
            .then((res) => {
                console.log('res', res);
                this.setState({
                    goods: res.data
                });
            })
            .catch(function (error) {
                console.log('err', error);
            });
    }

    render() {
        let prods = [];
        this.state.goods.map((item, idx) => {
            console.log('item:', item);
            let g = <Product
                img={item.img}
                name={item.name}
                vendor={item.vendor}
                price={item.price}
                rating={item.rating}
                vendor_code={item.vendor_code}
                key={idx}
            />;
            prods.push(g);
        });

        return (
            <div>
                {prods}
            </div>

        )
    }
};

const FilteredProductList = connect(mapStateToProps)(ProductList);

export default FilteredProductList;