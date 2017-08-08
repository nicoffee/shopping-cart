import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingCard from './containers/ShoppingCard'
import Goods from './containers/Goods'
import TextArea from './components/TextArea'
import { addGood } from './actions'

class App extends Component {
    render() {
        return (
          <div className="App">
              <ShoppingCard />
              <Goods />
              <TextArea
                ref={node => {
                  input = node
                }}
                cols="30"
                rows="10"
                onChange={e => {
                    dispatch(addGood)
                }}
              />
          </div>
        );
    }
}

export default App
