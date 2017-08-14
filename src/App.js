import React, {Component} from 'react';
import { createStore, combineReducers } from 'redux';
import reducer from './reducers'
import logo from './logo.svg';
import './App.css';
import ShoppingCard from './containers/ShoppingCard'
import Goods from './containers/Goods'
import TextArea from './components/TextArea'

const store = createStore(reducer);

class App extends Component {
    render() {
        return (
          <div className="App">
              <DevTools />
              <ShoppingCard />
              <Goods />
              <TextArea
                ref={node => (this.input = node)}
                cols="30"
                rows="10"
                onChange={e => {
                    store.dispatch({ type: 'ADD_GOOD' })
                }}
              />
          </div>
        );
    }
}

export default App
