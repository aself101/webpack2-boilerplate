/********************************************************
Alexander Self
2/16/2017
********************************************************/
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'

import App from './components/app';
import rootReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

(function() {
  render(
    <Provider store={createStoreWithMiddleware(rootReducer, window.devToolsExtension && window.devToolsExtension())}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
})();
