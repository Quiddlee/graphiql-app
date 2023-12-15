import { RouterProvider } from 'react-router-dom';

import router from '@/router/router';

import AuthProvider from './shared/Context/AuthContext';
import LanguageProvider from './shared/Context/LanguageContext';

const App = () => {
  return (
    <AuthProvider>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </AuthProvider>
  );
};

export default App;
