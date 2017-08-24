import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import { loadState, saveState } from './../localStorage'
import throttle from 'lodash/throttle'

const enhancer = compose(
    // Middleware you want to use in development:
    applyMiddleware(),
    // Required! Enable Redux DevTools with the monitors you chose
    DevTools.instrument()
);

const configureStore = () => {
    const persistedState = loadState();

    // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
    // See https://github.com/reactjs/redux/releases/tag/v3.1.0
    const store = createStore(rootReducer, persistedState, enhancer);

    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
    if (module.hot) {
        module.hot.accept('../reducers', () =>
            store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
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