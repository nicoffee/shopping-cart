import {combineReducers} from 'redux'
import {goods, filter, } from './reducers'

const rootReducer = combineReducers({
    goods,
    filter,

});

export default rootReducer;