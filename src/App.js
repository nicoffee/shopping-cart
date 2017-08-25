import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './reducers'
import ProductList from './containers/ProductList'
import './App.css'
import CartPreview from './components/CartPreview'

class App extends Component {
    render() {
        const {dispatch, state} = this.props;

        return (
            <div className="App">
                <CartPreview
                    count={state.goods.length}
                    goods={state.goods}
                />
                <ProductList/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({state});

export default connect(mapStateToProps)(App);
