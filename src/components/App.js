import React, {Component} from 'react'
import VisibleGoodsList from './../containers/VisibleGoodsList'
import CartContent from './../containers/CartContent'
import Sidebar from './Sidebar'

class App extends Component {
    render() {
        return (
            <div>
                <CartContent/>
                <VisibleGoodsList/>
                <Sidebar/>
            </div>
        )
    }
}

export default App
