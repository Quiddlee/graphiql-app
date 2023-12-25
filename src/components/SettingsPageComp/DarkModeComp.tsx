import { FC } from 'react';

import Switch from '@/shared/ui/Switch';

type PropsType = {
  checked: boolean;
  switcher: () => void;
};

const DarkModeComp: FC<PropsType> = ({ checked, switcher }) => {
  return (
    <div className="mt-6 flex items-center justify-between border-b-[1px] border-outline-variant pb-6">
      <div className="flex flex-col justify-between">
        <h4 className="text-[22px]">Dark mode</h4>
        <p className="mt-4">Adjust how the interface looks like.</p>
      </div>
      <Switch selected={checked} onClick={() => switcher()} />
    </div>
  );
};

export default DarkModeComp;
