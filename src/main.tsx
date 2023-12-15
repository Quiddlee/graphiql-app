import React from 'react';

import ReactDOM from 'react-dom/client';

import App from '@/App';
import EditorToolsProvider from '@components/EditorTools/context/EditorToolsProvider';

import LanguageProvider from './shared/Context/LanguageContext';

import '@/styles/index.css';
import 'overlayscrollbars/overlayscrollbars.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <EditorToolsProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </EditorToolsProvider>
  </React.StrictMode>,
);
