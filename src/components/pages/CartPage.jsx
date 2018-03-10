import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'material-ui/Table';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
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
  },

  emptyView: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '150px'
  }
};

class CartPage extends Component {
  static propTypes = {
    classes: PropTypes.object,
    goods: PropTypes.array,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
    const { classes, goods, price, removeGoodFromCart } = this.props;

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
                        className={classes.button}
                        variant="fab"
                        onClick={() => removeGoodFromCart(good)}>
                        <DeleteIcon />
                      </Button>
                      <Input
                        value={this.state.inputValue || good.count}
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
                    <TableCell>
                      {(good.price * good.count).toFixed(2)}
                    </TableCell>
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

// export default withStyles(styles)(ButtonSizes);

export default injectSheet(styles)(CartPage);
