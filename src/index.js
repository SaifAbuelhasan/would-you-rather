import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middleware';

const store = createStore(reducer, middleware);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}><App /></Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
