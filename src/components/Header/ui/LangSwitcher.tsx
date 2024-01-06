import { FC } from 'react';

type PropsType = {
  language: string;
  changeLanguage: (lang: 'en' | 'ru') => void;
  tip: string;
};

const LangSwitcher: FC<PropsType> = ({ language, changeLanguage, tip }) => {
  const text = language === 'en' ? 'Eng' : 'Ru';
  const switchLang = language === 'en' ? 'ru' : 'en';
  return (
    <button onClick={() => changeLanguage(switchLang)} type="button" data-tooltip={tip} className="tooltipElem">
      {text}
    </button>
  );
};

export default LangSwitcher;
