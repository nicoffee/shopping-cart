import React from 'react';
import PropTypes from 'prop-types';

const CartPage = props => {
  console.log('props', props);
  const { allIds, byId, price } = props;
  return (
    <div>
      <h1>Cart</h1>
      {allIds.length ? (
        <div>
          <table>
            <tbody>
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
};

CartPage.propTypes = {
  allIds: PropTypes.array,
  byId: PropTypes.object,
  price: PropTypes.number
};

export default CartPage;
