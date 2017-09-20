import {connect} from 'react-redux'
import {withRouter} from 'react-router'
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

const mapStateToProps = (state, {match}) => (
    {
        goods: getVisibleGoods(
            goods, 
            match.params.filter || 'SHOW_ALL'
        )
    }
);

const VisibleGoodsList = withRouter(connect(
    mapStateToProps,
    {onAddGoodClick: addGoodInCart}
)(GoodsList));

export default VisibleGoodsList;