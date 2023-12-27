import React from 'react';

import ReactDOM from 'react-dom/client';

import App from '@/app/App';

import initFirebaseApp from './firebase';

import '@/styles/index.css';
import 'overlayscrollbars/overlayscrollbars.css';
import 'react-toastify/dist/ReactToastify.css';

initFirebaseApp();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
