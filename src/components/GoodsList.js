import React from 'react'
import PropTypes from 'prop-types'
import Good from './Good'


const ProductList = ({goods}) => (
    <div>
        {goods.map((good, idx) => (
            <Good
                img={good.img}
                name={good.name}
                vendor={good.vendor}
                price={good.price}
                rating={good.rating}
                vendor_code={good.vendor_code}
                key={idx}
            />
        ))}
    </div>
);

ProductList.propTypes = {
    goods: PropTypes.object.isRequired,
    filter: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default ProductList;