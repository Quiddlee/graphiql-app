import React from 'react';

import ReactDOM from 'react-dom/client';

import App from '@/App';

import initFirebaseApp from './firebase';
import '@/styles/index.css';

initFirebaseApp();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
