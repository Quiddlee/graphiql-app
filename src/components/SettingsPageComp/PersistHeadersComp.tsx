import { FC } from 'react';

import { useLanguage } from '@/shared/Context/hooks';
import Switch from '@/shared/ui/Switch';

type PropsType = {
  checked: boolean;
  switcher: () => void;
};

const PersistHeaderComp: FC<PropsType> = ({ checked, switcher }) => {
  const { translation } = useLanguage();
  return (
    <div className="flex items-center justify-between border-b-[1px] border-outline-variant pb-6">
      <div className="mr-[10px] flex flex-col justify-between">
        <h4 className="text-sm sm:text-[22px]">{translation.settingsPage.headers.title}</h4>
        <div className="mt-4 text-sm sm:text-base">
          <p>{translation.settingsPage.headers.firstSub}</p>
          <p className="text-tertiary">{translation.settingsPage.headers.secondSub}</p>
        </div>
      </div>
      <Switch selected={checked} onClick={() => switcher()} />
    </div>
  );
};

export default PersistHeaderComp;
