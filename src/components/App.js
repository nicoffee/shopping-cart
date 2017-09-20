import React from 'react'
import VisibleGoodsList from './../containers/VisibleGoodsList'
import CartContent from './../containers/CartContent'
import Sidebar from './Sidebar'

const App = () => (
    <div>
        <CartContent/>
        <VisibleGoodsList/>
        <Sidebar/>
    </div>
);

export default App
