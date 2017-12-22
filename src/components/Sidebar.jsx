import React from 'react'
import { connect } from 'react-redux'
import Drawer from 'material-ui/Drawer'
import List from 'material-ui/List'
import Divider from 'material-ui/Divider'
import styles from './../styles/components/sidebar.css'

const Sidebar = () => (
  <Drawer type="permanent" className={styles.sidebar}>
    <Divider />
    <List />
  </Drawer>
)

const mapStateToProps = state => ({ state })

export default connect(mapStateToProps)(Sidebar)
