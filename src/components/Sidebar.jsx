import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';
import injectSheet from 'react-jss';

const styles = {
  sidebar: {
    width: '200px',
    minWidth: '200px',
    marginRight: '30px'
  },
  sidebar__filter: {
    padding: '5px'
  }
};

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: { min: 0, max: 1500 }
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.sidebar}>
        <div>
          <h4>Price</h4>
          <div className={classes.sidebar__filter}>
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

Sidebar.propTypes = {
  classes: PropTypes.object
};

export default injectSheet(styles)(Sidebar);
