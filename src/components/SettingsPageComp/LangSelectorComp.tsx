import { FC } from 'react';

import Icon from '@/shared/ui/Icon';

type PropsType = {
  language: string;
  changeLanguage: () => void;
};

const LangSelectorComp: FC<PropsType> = ({ language, changeLanguage }) => {
  const buttons =
    language === 'en' ? (
      <>
        <button
          type="button"
          className="flex w-[104px] items-center justify-center gap-[10px] rounded-bl-3xl rounded-tl-3xl border-[1px] border-outline bg-secondary-container transition-all duration-200 hover:bg-outline-variant"
        >
          <Icon>check</Icon>English
        </button>
        <button
          type="button"
          className="w-[104px] rounded-br-3xl rounded-tr-3xl border-[1px] border-l-0 border-outline transition-all duration-200 hover:bg-outline-variant"
          onClick={changeLanguage}
        >
          Russian
        </button>
      </>
    ) : (
      <>
        <button
          type="button"
          className="w-[104px] rounded-bl-3xl rounded-tl-3xl border-[1px] border-l-0 border-outline transition-all duration-200 hover:bg-outline-variant"
          onClick={changeLanguage}
        >
          English
        </button>
        <button
          type="button"
          className="flex w-[104px] items-center justify-center gap-[10px] rounded-br-3xl rounded-tr-3xl border-[1px] border-outline bg-secondary-container transition-all duration-200 hover:bg-outline-variant"
        >
          Russian<Icon>check</Icon>
        </button>
      </>
    );
  return (
    <div className="mt-6 flex items-center justify-between border-b-[1px] border-outline-variant pb-6">
      <div className="flex flex-col justify-between">
        <h4 className="text-[22px]">Language</h4>
        <p className="mt-4">Change app language.</p>
      </div>
      <div className="box-border flex h-[40px] text-sm font-[500]">{buttons}</div>
    </div>
  );
};

export default LangSelectorComp;
