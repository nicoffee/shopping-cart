import React, {Component} from 'react'
import DevTools from './../containers/DevTools'
import VisibleGoodsList from './../containers/VisibleGoodsList'
import Sidebar from './Sidebar'

class App extends Component {
    render() {
        return (
            <div>
                <VisibleGoodsList/>
                <Sidebar/>
                <DevTools/>
            </div>
        )
    }
}

export default App
