import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'material-ui/Table';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import DeleteIcon from 'material-ui-icons/Delete';

const styles = {
  image: {
    width: '100px'
  },

  button: {
    width: '36px',
    height: '36px',
    marginRight: '20px'
  },

  input: {
    width: '50px',
    '& input': {
      textAlign: 'center'
    }
  }
};

class CartTableRow extends Component {
  static propTypes = {
    classes: PropTypes.object,
    goods: PropTypes.array,
    removeGoodFromCart: PropTypes.func,
    changeGoodInCartAmount: PropTypes.func
  };

  state = {
    inputValue: ''
  };

  handleInputBlur = id =>
    this.props.changeGoodInCartAmount(
      id,
      Number.parseInt(this.state.inputValue)
    );

  handleInputChange = e => this.setState({ inputValue: e.target.value });

  render() {
    const { classes, good, removeGoodFromCart } = this.props;
    console.log('good', good);
    const { inputValue } = this.state;

    return (
      <TableRow>
        <TableCell>
          <Button
            className={classes.button}
            variant="fab"
            onClick={() => removeGoodFromCart(good)}>
            <DeleteIcon />
          </Button>
          <Input
            value={inputValue || good.count}
            className={classes.input}
            inputProps={{
              'aria-label': 'Description'
            }}
            onChange={e => this.handleInputChange(e)}
            onBlur={e => this.handleInputBlur(good.id, e)}
          />
        </TableCell>
        <TableCell>
          <img className={classes.image} src={good.img} />
        </TableCell>
        <TableCell>{good.name}</TableCell>
        <TableCell>{good.price}</TableCell>
        <TableCell>{(good.price * good.count).toFixed(2)}</TableCell>
      </TableRow>
    );
  }
}

// export default withStyles(styles)(ButtonSizes);

export default injectSheet(styles)(CartTableRow);
