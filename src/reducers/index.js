import {combineReducers} from 'redux'
import {goods} from './reducers'
import {categoryFilter} from './categoryFilter'

const rootReducer = combineReducers({
    goods,
    categoryFilter
});

export default rootReducer;