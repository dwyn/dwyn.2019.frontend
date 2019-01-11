import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducers/reducer'

// const store = createStore(reducer);

const app = (
  // <Provider >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </Provider >
)

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.register();
