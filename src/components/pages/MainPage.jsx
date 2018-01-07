import React from 'react'
import Sidebar from './../Sidebar'
import VisibleGoodsList from './../../containers/VisibleGoodsList'
import styles from './../../styles/components/content.css'

const MainPage = props => (
  <div className={styles.inner}>
    <Sidebar />
    <VisibleGoodsList {...props} />
  </div>
)

export default MainPage
