import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import { loadState, saveState } from './../localStorage'
import throttle from 'lodash/throttle'

const enhancer = compose(
    applyMiddleware(),
    DevTools.instrument()
);

const configureStore = () => {
    const persistedState = loadState();

    const store = createStore(rootReducer, persistedState, enhancer);

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