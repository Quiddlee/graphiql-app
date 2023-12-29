import { createContext, ReactNode, useCallback, useMemo, useState } from 'react';

import enTranslation from '@/locales/en';
import ruTranslation from '@/locales/ru';

type Translation = typeof enTranslation | typeof ruTranslation;

type LanguageContextType = {
  language: string;
  changeLanguage: (lang: 'en' | 'ru') => void;
  translation: Translation;
};

const TranslationFiles: { [key: string]: Translation } = {
  en: enTranslation,
  ru: ruTranslation,
};

export const LanguageContext = createContext<LanguageContextType>({} as LanguageContextType);

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState('en');

  const changeLanguage = useCallback(
    (lang: 'en' | 'ru') => {
      if (lang === language) return;
      setLanguage(lang);
    },
    [language],
  );

  const translation = TranslationFiles[language];
  const contextValue = useMemo(
    () => ({ language, changeLanguage, translation }),
    [language, changeLanguage, translation],
  );

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
}
