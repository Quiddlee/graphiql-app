import { useLanguage } from '@/shared/Context/hooks';

import LangBtns from './LangBtns';

const LangSelectorComp = () => {
  const { translation, language, changeLanguage } = useLanguage();
  return (
    <div className="mt-6 flex flex-col items-center justify-between border-b-[1px] border-outline-variant pb-6 sm:flex-row">
      <div className="flex w-full flex-col items-start justify-between">
        <h4 className="text-sm sm:text-[22px]">{translation.settingsPage.lang.title}</h4>
        <p className="mt-4">{translation.settingsPage.lang.subtitle}</p>
      </div>
      <div className="mt-4 box-border flex h-[40px] text-sm font-[500] sm:mt-0">
        <LangBtns language={language} changeLanguage={changeLanguage} />
      </div>
    </div>
  );
};

export default LangSelectorComp;
