import { FC } from 'react';

import TextButton from '@shared/ui/TextButton';

type PropsType = {
  language: string;
  changeLanguage: (lang: 'en' | 'ru') => void;
  tip: string;
};

const LangSwitcher: FC<PropsType> = ({ language, changeLanguage, tip }) => {
  const text = language === 'en' ? 'Eng' : 'Rus';
  const switchLang = language === 'en' ? 'ru' : 'en';
  return (
    <TextButton
      onClick={() => changeLanguage(switchLang)}
      type="button"
      data-tooltip={tip}
      className="tooltipElem max-h-10 max-w-10"
    >
      {text}
    </TextButton>
  );
};

export default LangSwitcher;
