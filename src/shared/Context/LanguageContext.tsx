import { createContext, ReactNode, useCallback, useMemo, useState } from 'react';

import enTranslation from '@/locales/en';
import ruTranslation from '@/locales/ru';

type Translation = typeof enTranslation | typeof ruTranslation;

type LanguageContextType = {
  language: 'en' | 'ru';
  changeLanguage: {
    (lang: 'en' | 'ru'): void;
    (): void;
  };
  translation: Translation;
};

const TranslationFiles = {
  en: enTranslation,
  ru: ruTranslation,
} as const;

export const LanguageContext = createContext<LanguageContextType>({} as LanguageContextType);

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<'en' | 'ru'>('en');

  const changeLanguage = useCallback(
    (lang?: 'en' | 'ru') => {
      if (lang === language) return;
      const newLang = lang || (language === 'en' ? 'ru' : 'en');
      setLanguage(newLang);
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
