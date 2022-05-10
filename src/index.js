import React from 'react';
import ReactDOM from 'react-dom/client';
import './global-styles.css';

import Header from './components/Index';
import Home from './pages/Home/Index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Home />
  </React.StrictMode>
);

