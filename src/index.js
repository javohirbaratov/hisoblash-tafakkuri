import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { StateProvider } from './StateProvider';
import reducer,{ initialState } from './initialState';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateProvider reducer={reducer} initialState={initialState}>
    <App />
  </StateProvider>
);
