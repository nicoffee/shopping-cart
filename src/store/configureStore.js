import { logger } from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import { loadState, saveState } from './../localStorage'
import throttle from 'lodash/throttle'
import thunkMiddleware from 'redux-thunk'

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
composeEnhancers = compose(applyMiddleware(thunkMiddleware, logger))

const configureStore = () => {
  const persistedState = loadState()

  const store = createStore(rootReducer, persistedState, composeEnhancers)

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    )
  }

  store.subscribe(
    throttle(() => {
      saveState({
        goods: store.getState().goods
      })
    }, 1000)
  )

  return store
}

export default configureStore
