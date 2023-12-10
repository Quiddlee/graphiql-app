import React from 'react';

import ReactDOM from 'react-dom/client';

import { LanguageProvider } from './shared/Context/LanguageContext';

import App from '@/App';

import '@/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
);
