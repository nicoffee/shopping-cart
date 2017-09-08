import React from 'react'
import PropTypes from 'prop-types'
import Good from './Good'


const GoodsList = ({goods, onAddGoodClick}) => (
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
                onClick={() => onAddGoodClick(good)}
            />
        ))}
    </div>
);

GoodsList.propTypes = {
    goods: PropTypes.array.isRequired
};

export default GoodsList;