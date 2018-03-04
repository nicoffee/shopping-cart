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

  trashImage: {
    width: '20px',
    height: '20px'
  },

  buttonCell: {
    width: '30px'
  }
};

class CartPage extends Component {
  state = {
    inputValue: ''
  };

  handleInput = e => this.setState({ inputValue: e.target.value });

  render() {
    const {
      classes,
      goods,
      price,
      removeGoodFromCart,
      increaseGoodInCartAmount
    } = this.props;

    return (
      <div>
        {goods.length ? (
          <div>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>Photo</TableCell>
                  <TableCell>Product name</TableCell>
                  <TableCell>Price per item</TableCell>
                  <TableCell numeric />
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {goods.map((good, idx) => (
                  <TableRow key={idx}>
                    <TableCell>
                      <Button
                        variant="fab"
                        disabled
                        aria-label="delete"
                        className={classes.button}
                        onClick={() => removeGoodFromCart(good.id, good.price)}>
                        <DeleteIcon />
                      </Button>
                    </TableCell>
                    <TableCell>
                      <img className={classes.image} src={good.img} />
                    </TableCell>
                    <TableCell>{good.name}</TableCell>
                    <TableCell>{good.price}</TableCell>
                    <TableCell numeric>{good.count}</TableCell>
                    <TableCell>
                      <Input
                        value={this.state.inputValue}
                        defaultValue="0"
                        className={classes.input}
                        inputProps={{
                          'aria-label': 'Description'
                        }}
                        onChange={this.handleInput}
                      />
                      <Button
                        onClick={() =>
                          increaseGoodInCartAmount(
                            good.id,
                            this.state.inputValue
                          )
                        }>
                        Apply
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <h2>Price: ${price}</h2>
          </div>
        ) : (
          <div>No items in cart</div>
        )}
      </div>
    );
  }
}

CartPage.propTypes = {
  classes: PropTypes.object,
  goods: PropTypes.array,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  removeGoodFromCart: PropTypes.func,
  increaseGoodInCartAmount: PropTypes.number
};

export default injectSheet(styles)(CartPage);
