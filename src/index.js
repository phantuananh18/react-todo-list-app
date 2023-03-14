import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import store from './store';
import { TodoContextProvider } from './context/TodoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <App />

  /** apply redux */
  // <Provider store={store}>
  //   <App />
  // </Provider>

  /** apply context API */
  <TodoContextProvider>
    <App />
  </TodoContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
