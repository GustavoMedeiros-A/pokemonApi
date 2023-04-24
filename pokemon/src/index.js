import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> // Se deixar essa tag, duplica os dados da API 
    <App />
  //</React.StrictMode>
);
