import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import DevTools from './containers/DevTools'
import ProductList from './containers/ProductList'
import CartPreview from './components/CartPreview'
import {setCategoryFilter} from './actions'
import './App.css'

class App extends Component {
    constructor() {
        super();
    }

    render() {
        const {state} = this.props;

        return (
            <div className="App">
                <CartPreview
                    count={state.goods.length}
                    goods={state.goods.arr}
                />
                <ProductList/>
                <button onClick={() => this.props.dispatch(setCategoryFilter('ALL'))}>
                    Show All
                </button>
                <button onClick={() => this.props.dispatch(setCategoryFilter('CASES'))}>
                    Show Cases
                </button>
                <DevTools/>
            </div>
        )
    }
}

App.propTypes = {
    state: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({state});

export default connect(mapStateToProps)(App)
