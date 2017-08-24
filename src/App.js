import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './reducers'
import ProductList from './containers/ProductList'
import './App.css'

class App extends Component {
    render() {
        const {dispatch, state} = this.props;

        const goodsList = state.goods.map((item, idx) => {
            return (
                <li key={idx}>
                    {item.name}
                </li>
            )
        });

        return (
            <div className="App">
                <div>
                    Товаров в корзине: {state.goods.length}
                    <br />
                    Товары:
                    <ul>
                        {goodsList}
                    </ul>
                </div>
                <ProductList />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(App);
