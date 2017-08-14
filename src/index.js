import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';

const store = configureStore();

render(
  <Provider store={store}>
      <App/>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
