import React from 'react'
import VisibleGoodsList from './../containers/VisibleGoodsList'
import Sidebar from './Sidebar'
import styles from './../styles/components/content.css'

const App = props => (
  <div className={styles.inner}>
    <Sidebar />
    <VisibleGoodsList {...props} />
  </div>
)

export default App
