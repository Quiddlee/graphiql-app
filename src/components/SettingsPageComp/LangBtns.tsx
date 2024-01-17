import { FC } from 'react';

import cn from '@/shared/lib/helpers/cn';
import Icon from '@/shared/ui/Icon';

type PropsType = {
  language: string;
  changeLanguage: (lang: 'en' | 'ru') => void;
};

const LangBtns: FC<PropsType> = ({ language, changeLanguage }) => {
  const isEnglish = language === 'en';

  return (
    <>
      <button
        onClick={() => changeLanguage('en')}
        type="button"
        className={cn(
          'flex w-[104px] items-center justify-center gap-[10px] rounded-l-3xl border border-outline transition-all duration-200 hover:bg-outline-variant',
          {
            'bg-secondary-container': isEnglish,
          },
        )}
      >
        {isEnglish && <Icon>check</Icon>}English
      </button>
      <button
        type="button"
        className={cn(
          'flex w-[104px] items-center justify-center gap-[10px] rounded-r-3xl border-[1px] border-outline transition-all duration-200 hover:bg-outline-variant',
          {
            'bg-secondary-container': !isEnglish,
          },
        )}
        onClick={() => changeLanguage('ru')}
      >
        Русский{!isEnglish && <Icon>check</Icon>}
      </button>
    </>
  );
};

export default LangBtns;
