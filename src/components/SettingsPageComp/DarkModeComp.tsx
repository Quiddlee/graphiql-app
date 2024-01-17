import { useState } from 'react';

import localStorageKeys from '@/shared/constants/localStorageKeys';
import { useLanguage } from '@/shared/Context/hooks';
import colorThemeSwitcher from '@/shared/helpers/colorThemeSwitcher';
import Switch from '@/shared/ui/Switch';

const DarkModeComp = () => {
  const { translation } = useLanguage();
  const [isDarkMode, setIsDarkMode] = useState(() => !localStorage.getItem(localStorageKeys.LIGHT_THEME));

  function handleThemeSwitch() {
    if (isDarkMode) {
      colorThemeSwitcher.setLight();
    } else {
      colorThemeSwitcher.setDark();
    }
    setIsDarkMode((prev) => !prev);
  }
  return (
    <div className="mt-6 flex items-center justify-between border-b-[1px] border-outline-variant pb-6">
      <div className="mr-[10px] flex flex-col justify-between">
        <h4 className="text-sm sm:text-[22px]">{translation.settingsPage.mode.title}</h4>
        <p className="mt-4">{translation.settingsPage.mode.subtitle}</p>
      </div>
      <Switch selected={isDarkMode} onClick={() => handleThemeSwitch()} data-testid="themeSwitcher" />
    </div>
  );
};

export default DarkModeComp;
