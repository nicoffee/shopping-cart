import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { NavLink, Link } from 'react-router-dom';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'material-ui/Table';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';
import DeleteIcon from 'material-ui-icons/Delete';
import ArrowBack from 'material-ui-icons/ArrowBack';

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
  },

  emptyView: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '150px'
  }
};

class CartPage extends Component {
  state = {
    inputValue: ''
  };

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     inputValue: props.
  //   }
  // }

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
                        variant="fab"
                        onClick={() => removeGoodFromCart(good)}>
                        <DeleteIcon />
                      </Button>
                      <Input
                        value={good.count}
                        defaultValue="0"
                        className={classes.input}
                        inputProps={{
                          'aria-label': 'Description'
                        }}
                        onChange={this.handleInput}
                      />
                    </TableCell>
                    <TableCell>
                      <img className={classes.image} src={good.img} />
                    </TableCell>
                    <TableCell>{good.name}</TableCell>
                    <TableCell>{good.price}</TableCell>
                    <TableCell>totalPrice</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <h2>Price: ${price}</h2>
          </div>
        ) : (
          <div className={classes.emptyView}>
            <Typography variant="display1" gutterBottom>
              No items in cart
            </Typography>
            <Link to="/">Back to the store</Link>
          </div>
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
  increaseGoodInCartAmount: PropTypes.func
};

export default injectSheet(styles)(CartPage);
