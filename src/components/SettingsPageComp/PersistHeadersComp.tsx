import { FC } from 'react';

import Switch from '@/shared/ui/Switch';

type PropsType = {
  checked: boolean;
  switcher: () => void;
};

const PersistHeaderComp: FC<PropsType> = ({ checked, switcher }) => {
  return (
    <div className="flex items-center justify-between border-b-[1px] border-outline-variant pb-6">
      <div className="flex flex-col justify-between">
        <h4 className="text-[22px]">Persist headers</h4>
        <div className="mt-4 text-base">
          <p>Save headers upon reloading.</p>
          <p className="text-tertiary">Only enable if you trust this device</p>
        </div>
      </div>
      <Switch selected={checked} onClick={() => switcher()} />
    </div>
  );
};

export default PersistHeaderComp;
