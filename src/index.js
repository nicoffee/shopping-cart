import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store/configureStore'
import './index.css'
import { loadState, saveState } from './localStorage'
const store = configureStore();

store.subscribe(() => {
   saveState(store.getState())
});

render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
