import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CartProvider from './order/Features/ContextProvider';
ReactDOM.render(
  <React.StrictMode>
    <CartProvider>   
       <Router>
      <Routes>
    <Route path='/*' element={<App />} />
    </Routes>
    </Router>
    </CartProvider>

  </React.StrictMode>,
  document.getElementById('root')
);
