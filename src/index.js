import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StateProvider } from './StateProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateProvider value={{test: 'salom'}}>
    <App />
  </StateProvider>
);
