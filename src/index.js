import React from 'react';
import reactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import App from './App';
import allReducers from './reducers';

const store = createStore(allReducers, applyMiddleware(ReduxThunk));

reactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
