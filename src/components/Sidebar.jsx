import React, { Component } from 'react'
import InputRange from 'react-input-range'
import styles from './../styles/components/sidebar.css'

class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.state = { value: 11 }
  }

  render() {
    return (
      <div className={styles.sidebar}>
        <div>
          <h4>Price</h4>
          <InputRange
            maxValue={20}
            minValue={0}
            value={this.state.value}
            onChange={value => this.setState({ value })}
          />
        </div>
      </div>
    )
  }
}

export default Sidebar
