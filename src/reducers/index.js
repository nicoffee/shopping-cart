import {combineReducers} from 'redux'
import {goods} from './reducers'
import {filter} from './categoryFilter'

const rootReducer = combineReducers({
    goods,
    filter,

});

export default rootReducer;