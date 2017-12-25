import React from 'react'
import VisibleGoodsList from './../containers/VisibleGoodsList'
import Sidebar from './Sidebar'
import styles from './../styles/components/content.css'

const Content = props => {
  console.log('props s', props)
  return (
    <div className={styles.inner}>
      <Sidebar />
      <VisibleGoodsList {...props} />
    </div>
  )
}

export default Content
