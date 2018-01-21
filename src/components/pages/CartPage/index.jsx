import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

const CartPage = props => {
  console.log('props', props);
  const { allIds, byId, price, removeGoodFromCart } = props;
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
              </tr>
              {byId.map((id, idx) => (
                <tr key={idx}>
                  <td>
                    <button onClick={() => removeGoodFromCart(id.id)}>
                      Remove
                    </button>
                  </td>
                  <td>
                    <img src={id.img} alt="" />
                  </td>
                  <td>{id.name}</td>
                  <td>{id.price}</td>
                  <td>
                    <input type="text" />
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
};

CartPage.propTypes = {
  allIds: PropTypes.array,
  byId: PropTypes.array,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default CartPage;
