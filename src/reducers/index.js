import {combineReducers} from 'redux'
import {goodsInCart} from './reducers'

const rootReducer = combineReducers({
    goodsInCart
});

export default rootReducer;