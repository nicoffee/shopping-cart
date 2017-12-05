import { logger } from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import rootReducer from '../reducers'

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
composeEnhancers = compose(applyMiddleware(ReduxThunk, logger))

const configureStore = () => {
  const store = createStore(rootReducer, composeEnhancers)

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    )
  }

  return store
}

export default configureStore
