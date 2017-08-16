import React, {Component} from 'react';
import { connect } from 'react-redux'
import { createStore, combineReducers } from 'redux';
import rootReducer from './reducers'
// import logo from './logo.svg';
import './App.css';
import ShoppingCart from './containers/ShoppingCart'
import Product from './components/Product'
// import Goods from './containers/Goods'
// import TextArea from './components/TextArea'

const store = createStore(rootReducer);

class App extends Component {
    render() {
        return (
          <div className="App">
            <ShoppingCart />
              <div>
                  <Product />
              </div>
          </div>
        );
    }
}

export default connect()(App)
