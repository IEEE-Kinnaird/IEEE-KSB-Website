import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ensure this is the correct path to your App.js file
import './index.css'; // You can have your global CSS here, if any

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
