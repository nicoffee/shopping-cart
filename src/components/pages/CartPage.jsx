import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
  image: {
    width: '100px'
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
      allIds,
      byId,
      price,
      removeGoodFromCart,
      increaseGoodInCartAmount
    } = this.props;

    return (
      <div>
        {byId.length ? (
          <div>
            <table className={styles.table}>
              <tbody>
                <tr>
                  <th />
                  <th>Photo</th>
                  <th>Product name</th>
                  <th>Price per item</th>
                  <th>Amount</th>
                  <th />
                </tr>
                {byId.map((id, idx) => (
                  <tr key={idx}>
                    <td>
                      <button
                        onClick={() => removeGoodFromCart(id.id, id.price)}>
                        Remove
                      </button>
                    </td>
                    <td>
                      <img className={classes.image} src={id.img} alt="" />
                    </td>
                    <td>{id.name}</td>
                    <td>{id.price}</td>
                    <td>{id.count}</td>
                    <td>
                      <input
                        type="text"
                        value={this.state.inputValue}
                        onChange={this.handleInput}
                      />
                      <button
                        onClick={() =>
                          increaseGoodInCartAmount(id.id, this.state.inputValue)
                        }>
                        Apply
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
  allIds: PropTypes.array,
  byId: PropTypes.array,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default injectSheet(styles)(CartPage);
