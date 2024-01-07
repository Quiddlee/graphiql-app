import { useEffect } from 'react';

import { RouterProvider } from 'react-router-dom';

import router from '@/router/router';
import localStorageKeys from '@/shared/constants/localStorageKeys';
import AppContextProvider from '@/shared/Context/AppContext';
import colorThemeSwitcher from '@/shared/helpers/colorThemeSwitcher';
import EditorProvider from '@components/Editor/context/EditorProvider';
import LanguageProvider from '@shared/Context/LanguageContext';

const App = () => {
  useEffect(() => {
    const isLightTheme =
      localStorage.getItem(localStorageKeys.LIGHT_THEME) ||
      (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches);

    if (isLightTheme) {
      colorThemeSwitcher.setLight();
    }
  }, []);

  return (
    <EditorProvider>
      <AppContextProvider>
        <LanguageProvider>
          <RouterProvider router={router} />
        </LanguageProvider>
      </AppContextProvider>
    </EditorProvider>
  );
};

export default App;
