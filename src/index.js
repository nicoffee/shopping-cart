import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store/configureStore'
import './index.css'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'

const persistedState = loadState();
const store = configureStore(persistedState);

store.subscribe(throttle(() => {
   saveState({
       goods: store.getState().goods
   });
}, 1000));

render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
