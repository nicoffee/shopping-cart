import { logger } from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import { loadState, saveState } from './../localStorage'
import throttle from 'lodash/throttle'
import thunkMiddleware from 'redux-thunk'

const enhancer = compose(
    applyMiddleware(thunkMiddleware, logger)
);

const configureStore = () => {
    const persistedState = loadState();

    const store = createStore(
        rootReducer,
        persistedState,
        enhancer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    if (module.hot) {
        module.hot.accept('../reducers', () =>
            store.replaceReducer(require('../reducers'))
        );
    }

    store.subscribe(throttle(() => {
        saveState({
            goods: store.getState().goods
        });
    }, 1000));

    return store;
};

export default configureStore;