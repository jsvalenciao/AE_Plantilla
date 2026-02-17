
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

console.log('🚀 Index.tsx cargado. Iniciando renderizado de React...');

const rootElement = document.getElementById('root');
if (!rootElement) {
    console.error("No se encontró el elemento #root para montar la aplicación");
} else {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
}
