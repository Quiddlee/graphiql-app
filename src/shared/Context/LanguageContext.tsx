import { FC, PropsWithChildren, createContext, useContext, useState } from 'react';

type LanguageContextType = {
  language: string;
  changeLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType>({} as LanguageContextType);

export const LanguageProvider: FC<PropsWithChildren> = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const changeLanguage = () => {
    const newLang = language === "en" ? "ru" : "en";
    setLanguage(newLang);
  };

  return (
    <LanguageContext.Provider value={{language, changeLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
