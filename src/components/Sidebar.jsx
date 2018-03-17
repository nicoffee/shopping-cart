import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Drawer from 'material-ui/Drawer';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Slider, { Range } from 'rc-slider';

const styles = {
  drawerPaper: {
    position: 'relative',
    width: '200px',
    height: 'auto',
    marginRight: '30px',
    padding: '20px'
  }
};

const style = { width: 400, margin: 50 };

function log(value) {
  console.log(value); //eslint-disable-line
}

class Sidebar extends React.Component {
  state = {
    selectValue: ''
  };

  handleVendorSelect = e => {
    this.setState({ selectValue: e.target.value });
    this.props.filterGoods(e.target.value);
  };

  render() {
    const { classes } = this.props;

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="vendor">Vendor</InputLabel>
          <Select
            value={this.state.selectValue}
            inputProps={{
              name: 'vendor',
              id: 'vendor'
            }}
            onChange={this.handleVendorSelect}>
            <MenuItem value="Phanteks">Phanteks</MenuItem>
            <MenuItem value="Corsair">Corsair</MenuItem>
            <MenuItem value="Fractal Design">Fractal Design</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <Range allowCross={false} defaultValue={[0, 20]} onChange={log} />
        </FormControl>
      </Drawer>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object
};

export default injectSheet(styles)(Sidebar);
