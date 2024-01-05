import React from 'react';

import ReactDOM from 'react-dom/client';

import App from '@/app/App';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ErrorFallback from './components/ErrorFallback/ErrorFallback';
import initFirebaseApp from './firebase';

import '@/styles/index.css';
import 'overlayscrollbars/overlayscrollbars.css';
import 'react-toastify/dist/ReactToastify.css';

initFirebaseApp();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<ErrorFallback />}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
