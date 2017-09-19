import {connect} from 'react-redux'
import {addGoodInCart} from '../actions'
import GoodsList from '../components/GoodsList'
import {goods} from './../../db.json'

const getVisibleGoods = (goods, filter) => {
    let allGoods = [];
    Object.keys(goods).map(key => allGoods = allGoods.concat(goods[key]));

    switch (filter) {
        case 'SHOW_ALL':
            return allGoods;
        case 'SHOW_CASES':
            return goods.cases;
        case 'SHOW_MONITORS':
            return goods.monitors
    }
};

const mapDispatchToProps = dispatch => ({
        onAddGoodClick: good => {
            console.log('good', good);
            dispatch(addGoodInCart(good))
        }
    }
);

const mapStateToProps = (state, ownProps) => (
    {
        goods: getVisibleGoods(goods, ownProps.filter)
    }
);

const VisibleGoodsList = connect(
    mapStateToProps,
    mapDispatchToProps
)(GoodsList);

export default VisibleGoodsList;