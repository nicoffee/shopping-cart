import React from 'react';
import PropTypes from 'prop-types';

const CartPage = ({ allIds, byId, price }) => (
  <div>
    <h1>Cart</h1>
    {allIds.length ? (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Photo</th>
              <th>Product name</th>
              <th>Price per item</th>
              <th>Amount</th>
            </tr>
            {allIds.map((id, idx) => (
              <tr key={idx}>
                <td>
                  <img src={byId[id].img} alt="" />
                </td>
                <td>{byId[id].name}</td>
                <td>{byId[id].price}</td>
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

CartPage.propTypes = {
  allIds: PropTypes.array,
  byId: PropTypes.object,
  price: PropTypes.number
};

export default CartPage;
