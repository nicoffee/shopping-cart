import React from 'react'
import VisibleGoodsList from './../containers/VisibleGoodsList'
import CartContent from './../containers/CartContent'
import Sidebar from './Sidebar'

const App = ({match}) => (
    <div>
        <CartContent/>
        <VisibleGoodsList filter={match.params.filter || 'SHOW_ALL'}/>
        <Sidebar/>
    </div>
);

export default App
