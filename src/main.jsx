import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 specific
import App from './App';
import './index.css'; // Global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
