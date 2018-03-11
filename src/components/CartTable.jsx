import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'material-ui/Table';
import CartTableRow from './CartTableRow';

const styles = {
  table: {
    color: 'black'
  }
};

const CartTable = ({
  classes,
  goods,
  removeGoodFromCart,
  changeGoodInCartAmount
}) => (
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
        <CartTableRow
          key={idx}
          good={good}
          removeGoodFromCart={removeGoodFromCart}
          changeGoodInCartAmount={changeGoodInCartAmount}
        />
      ))}
    </TableBody>
  </Table>
);

CartTable.propTypes = {
  classes: PropTypes.object,
  goods: PropTypes.array,
  removeGoodFromCart: PropTypes.func,
  changeGoodInCartAmount: PropTypes.func
};

export default injectSheet(styles)(CartTable);
