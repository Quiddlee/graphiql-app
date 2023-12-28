import useLanguage from '@/shared/Context/hooks';

import LangBtns from './LangBtns';

const LangSelectorComp = () => {
  const { translation, language, changeLanguage } = useLanguage();
  return (
    <div className="mt-6 flex items-center justify-between border-b-[1px] border-outline-variant pb-6">
      <div className="flex flex-col justify-between">
        <h4 className="text-[22px]">{translation.settingsPage.lang.title}</h4>
        <p className="mt-4">{translation.settingsPage.lang.subtitle}</p>
      </div>
      <div className="box-border flex h-[40px] text-sm font-[500]">
        <LangBtns language={language} changeLanguage={changeLanguage} />
      </div>
    </div>
  );
};

export default LangSelectorComp;
