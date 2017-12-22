import React from 'react'
import VisibleGoodsList from './../containers/VisibleGoodsList'
import Sidebar from './Sidebar'
import styles from './../styles/components/content.css'

const Content = () => (
  <div className={styles.inner}>
    <Sidebar />
    <VisibleGoodsList />
  </div>
)

export default Content
