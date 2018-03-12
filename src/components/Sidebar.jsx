import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Drawer from 'material-ui/Drawer';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';

const styles = {
  drawerPaper: {
    position: 'relative',
    width: '200px',
    height: 'auto',
    marginRight: '30px',
    padding: '20px'
  }
};

class Sidebar extends React.Component {
  state = {
    selectValue: ''
  };

  handleVendorSelect = () => {};

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
            onChange={e => this.setState({ selectValue: e.target.value })}>
            <MenuItem value="Phanteks">Phanteks</MenuItem>
            <MenuItem value="Corsair">Corsair</MenuItem>
            <MenuItem value="Fractal Design">Fractal Design</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="minPrice">Min-price</InputLabel>
          <Select
            value="test"
            inputProps={{
              name: 'minPrice',
              id: 'minPrice'
            }}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <InputLabel htmlFor="maxPrice">Max-price</InputLabel>
          <Select
            value="test"
            inputProps={{
              name: 'maxPrice',
              id: 'maxPrice'
            }}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Phanteks">Phanteks</MenuItem>
            <MenuItem value="Corsair">Corsair</MenuItem>
            <MenuItem value="Fractal Design">Fractal Design</MenuItem>
          </Select>
        </FormControl>
      </Drawer>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object
};

export default injectSheet(styles)(Sidebar);
