import React, { Component } from 'react';
import InputRange from 'react-input-range';
import styles from './../styles/components/sidebar.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: { min: 0, max: 1500 }
    };
  }

  render() {
    return (
      <div className={styles.sidebar}>
        <div>
          <h4>Price</h4>
          <div className={styles.sidebar__filter}>
            <InputRange
              maxValue={1500}
              minValue={0}
              value={this.state.value}
              onChange={value => this.setState({ value })}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
