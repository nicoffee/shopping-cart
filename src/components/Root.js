import React, {Component} from 'react';
import {Provider} from 'react-redux'
import CartPage from './CartPage'
import App from './../App'
import {HashRouter, BrowserRouter, Route} from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <h1>
                test
            </h1>
        )
    }
}

const Root = ({store}) => (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path="/" component={App}/>
                <Route path="/cart" component={Home}/>
            </div>
        </BrowserRouter>
    </Provider>
);

export default Root;