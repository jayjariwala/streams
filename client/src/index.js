import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './components/App';
import reducers from './reducers';

//  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//  const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
//     // applyMiddleware(...middleware)
//   ));

const store = createStore(
  reducers, /* preloadedState, */
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));