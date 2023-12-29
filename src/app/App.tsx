import { useEffect } from 'react';

import { RouterProvider } from 'react-router-dom';

import router from '@/router/router';
import localStorageKeys from '@/shared/constants/localStorageKeys';
import colorThemeSwitcher from '@/shared/helpers/colorThemeSwitcher';
import AuthProvider from '@shared/Context/AuthContext';
import LanguageProvider from '@shared/Context/LanguageContext';

const App = () => {
  useEffect(() => {
    const isLightTheme = localStorage.getItem(localStorageKeys.LIGHT_THEME);
    if (isLightTheme) {
      colorThemeSwitcher.setLight();
    }
  }, []);
  return (
    <AuthProvider>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </AuthProvider>
  );
};

export default App;
