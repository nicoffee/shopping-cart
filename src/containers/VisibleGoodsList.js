import {connect} from 'react-redux'
import {addGoodInCart} from '../actions'
import GoodsList from '../components/GoodsList'
import goods from './../../db.json'

console.log('goods', goods);

const getVisibleGoods = (goods, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return goods;
        case 'CASES':
            return goods.cases;
        case 'MONITORS':
            return goods.monitors
    }
};

const mapDispatchToProps = dispatch => ({
        onAddGoodClick: good => {
            dispatch(addGoodInCart(good))
        }
    }
);

const mapStateToProps = state => { console.log('state', state); return (
    {
        goods: getVisibleGoods(state.goods, state.visibilityFilter)
    }
)};

const VisibleGoodsList = connect(
    mapStateToProps,
    mapDispatchToProps
)(GoodsList);

export default VisibleGoodsList;