import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import 'react-loading-skeleton/dist/skeleton.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './components/AuthProvider/AuthProvider';
import ServiceProvider from './components/ServiceProvider/ServiceProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
      <ServiceProvider>

      <App />
      </ServiceProvider>
    </AuthProvider>
    </HelmetProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
