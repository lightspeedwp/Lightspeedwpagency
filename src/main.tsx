/**
 * LSX Design — Application Entry Point
 * 
 * Bootstrap file that initializes the React application.
 * Mounts the App component to the DOM root element.
 * 
 * @see /src/app/App.tsx — Main application component
 * @see /index.html — HTML entry point
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element. Make sure there is a <div id="root"></div> in your HTML.');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
