import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Import Provider from react-redux
import { Provider } from 'react-redux';

// Import the Redux store
import store from './store.js';

// Wrap the App component with Provider and pass the store
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
