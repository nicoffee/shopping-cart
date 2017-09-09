import {combineReducers} from 'redux'
import {goodsInCart} from './reducers'
import {categoryFilter} from './categoryFilter'

const rootReducer = combineReducers({
    goodsInCart,
    categoryFilter
});

export default rootReducer;