import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './reducers'
import ProductList from './containers/ProductList'
import './App.css'

const store = createStore(rootReducer);

class App extends Component {
    constructor() {
        super();
        this.state = {date: new Date()};
    }

    render() {
        const {dispatch} = this.props;

        return (
            <div className="App">
                <ProductList />
            </div>
        )
    }
}

export default connect()(App)
