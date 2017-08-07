import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingCard from './containers/ShoppingCard'
import Goods from './containers/Goods'
import reducers from './actions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShoppingCard />
        <Goods />
      </div>
    );
  }
}

export default App;
