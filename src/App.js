import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import rootReducer from './reducers';
import ShoppingCart from './containers/ShoppingCart'
import ProductList from './containers/ProductList'
import Product from './components/Product'
import './App.css';

const store = createStore(rootReducer);

class App extends Component {
    constructor() {
        super();
        this.state = {date: new Date()};
    }

    render() {
        const { dispatch } = this.props;

        return (
          <div className="App">
              <ShoppingCart/>
              <ProductList />
              <input ref={node => {this.input = node}} type="text" />
              <button onClick={() => dispatch({
                  type: 'ADD_GOOD',
                  name: this.input.value
              })}>
                  ADD_GOOD
              </button>
              <button onClick={() => dispatch({ type: 'REMOVE_GOOD' })}>
                  REMOVE_GOOD
              </button>
          </div>
        );
    }
}

export default connect()(App)
