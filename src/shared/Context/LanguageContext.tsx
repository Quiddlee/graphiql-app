import { createContext, ReactNode, useCallback, useMemo, useState } from 'react';

import enTranslation from '@/locales/en';
import ruTranslation from '@/locales/ru';

type Translation = typeof enTranslation | typeof ruTranslation;

type LanguageContextType = {
  language: string;
  changeLanguage: () => void;
  translation: Translation;
};

const TranslationFiles: { [key: string]: Translation } = {
  en: enTranslation,
  ru: ruTranslation,
};

export const LanguageContext = createContext<LanguageContextType>({} as LanguageContextType);

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState('en');

  const changeLanguage = useCallback(() => {
    const newLang = language === 'en' ? 'ru' : 'en';
    setLanguage(newLang);
  }, [language]);

  const translation = TranslationFiles[language];
  const contextValue = useMemo(() => ({ language, changeLanguage, translation }), [language, changeLanguage]);

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
}
