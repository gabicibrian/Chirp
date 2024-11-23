import React from 'react';
import ReactDOM from 'react-dom/client';
import '@material/web/tabs/secondary-tab.js';
import '@material/web/icon/icon.js';
import '@material/web/ripple/ripple.js';
import '@material/web/button/text-button.js';
import "@material/web/textfield/outlined-text-field.js";
import '@material/web/button/filled-button.js';
import './css/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

