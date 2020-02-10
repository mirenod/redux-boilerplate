import React from 'react';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

import Feature1Component from "./feature1/Feature1Component"
import Feature2Component from "./feature2/Feature2Component"

const middleware = [logger, thunk];

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware)),
);




function App() {
  return (
    <Provider store={store}>
    <div >
      <Feature1Component />
      <Feature2Component />
    </div>
    </Provider>
  );
}

export default App;
