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

class CartTable extends Component {
  static propTypes = {
    classes: PropTypes.object,
    goods: PropTypes.array,
    removeGoodFromCart: PropTypes.func,
    changeGoodInCartAmount: PropTypes.func
  };

  state = {
    inputValue: null
  };

  handleInputBlur = id =>
    this.props.changeGoodInCartAmount(
      id,
      Number.parseInt(this.state.inputValue)
    );

  handleInputChange = e => this.setState({ inputValue: e.target.value });

  render() {
    const { classes, goods, removeGoodFromCart } = this.props;
    const { inputValue } = this.state;

    return (
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Count</TableCell>
            <TableCell>Photo</TableCell>
            <TableCell>Product name</TableCell>
            <TableCell>Price per item</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {goods.map((good, idx) => (
            <TableRow key={idx}>
              <TableCell>
                <Button
                  className={classes.button}
                  variant="fab"
                  onClick={() => removeGoodFromCart(good)}>
                  <DeleteIcon />
                </Button>
                <Input
                  value={inputValue || good.count}
                  defaultValue="0"
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
          ))}
        </TableBody>
      </Table>
    );
  }
}

// export default withStyles(styles)(ButtonSizes);

export default injectSheet(styles)(CartTable);
