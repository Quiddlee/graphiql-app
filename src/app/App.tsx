import { RouterProvider } from 'react-router-dom';

import router from '@/router/router';
import AppContextProvider from '@/shared/Context/AppContext';
import AuthProvider from '@shared/Context/AuthContext';
import LanguageProvider from '@shared/Context/LanguageContext';

const App = () => {
  return (
    <AppContextProvider>
      <AuthProvider>
        <LanguageProvider>
          <RouterProvider router={router} />
        </LanguageProvider>
      </AuthProvider>
    </AppContextProvider>
  );
};

export default App;
