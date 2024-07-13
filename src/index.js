import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';
import App from './App';

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>    <div className='app'>
    <div className='orange'></div>

   <App />
   </div>
   </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
