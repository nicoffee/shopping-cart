import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {addGoodInCart} from '../actions'
import GoodsList from '../components/GoodsList'
import {getVisibleGoods} from '../reducers'
import {goods} from './../../db.json'



const mapStateToProps = (state, {match}) => (
    {
        goods: getVisibleGoods(
            state, 
            match.params.filter || 'SHOW_ALL'
        )
    }
);

const VisibleGoodsList = withRouter(connect(
    mapStateToProps,
    {onAddGoodClick: addGoodInCart}
)(GoodsList));

export default VisibleGoodsList;