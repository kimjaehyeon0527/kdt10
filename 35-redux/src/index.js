import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App2';
// import { createStore } from 'redux';
// import counterReducer from './store/counterReducer';
// import isVisibleReducer from './store/isVisibleReducer';
import { Provider } from 'react-redux';
import PracApp from './PracApp';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './store';
import { composeWithDevTools } from 'redux-devtools-extension';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const store = createStore(counterReducer);
// const Prac = createStore(isVisibleReducer);

const store = configureStore({ reducer: rootReducer }, composeWithDevTools());

root.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <App />
    </Provider> */}
    <Provider store={store}>
      <App />
    </Provider>
    <Provider store={store}>
      <PracApp />
    </Provider>
  </React.StrictMode>
);
