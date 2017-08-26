import React, {Component} from 'react'
import {connect} from 'react-redux'
import DevTools from './containers/DevTools'
import ProductList from './containers/ProductList'
import './App.css'
import axios from 'axios';
import CartPreview from './components/CartPreview'

let arr = [];

class App extends Component {


    render() {
        const {state} = this.props;

        return (
            <div className="App">
                <CartPreview
                    count={state.goods.length}
                    goods={state.goods.arr}
                />
                <ProductList />
                <DevTools />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({state});

export default connect(mapStateToProps)(App);
