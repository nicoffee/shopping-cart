import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import Product from '../components/Product/index'

const mapStateToProps = ({goods}) => ({goods});

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goods: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3000/cases')
            .then((res) => {
                this.setState({
                    goods: res.data
                });
            })
            .catch(() => {
            });
    }

    render() {
        let goods = [];
        this.state.goods.map((item, idx) => {
            const good = <Product
                img={item.img}
                name={item.name}
                vendor={item.vendor}
                price={item.price}
                rating={item.rating}
                vendor_code={item.vendor_code}
                key={idx}
            />;
            goods.push(good);
        });

        return (
            <div>
                {goods}
            </div>
        )
    }
}

const FilteredProductList = connect(mapStateToProps)(ProductList);

export default FilteredProductList;