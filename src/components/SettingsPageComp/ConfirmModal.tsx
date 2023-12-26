import { Dispatch, FC, SetStateAction } from 'react';

import FilledTonalButton from '@/shared/ui/FilledTonalButton';
import Icon from '@/shared/ui/Icon';
import TextButton from '@/shared/ui/TextButton';

type PropsType = {
  setIsShown: Dispatch<SetStateAction<boolean>>;
};

const ConfirmModal: FC<PropsType> = ({ setIsShown }) => {
  return (
    <div className="w-[312px] rounded-4xl bg-surface-container-high p-6 font-[500] text-on-surface">
      <Icon>delete</Icon>
      <h3 className="mt-4 text-2xl">Clear data</h3>
      <p className="mt-4 text-start text-sm text-on-surface-variant">
        Are you sure you want to clear all local storage data?
      </p>
      <div className="mt-6 flex justify-end gap-2">
        <TextButton onClick={() => setIsShown((prev) => !prev)}>Cancel</TextButton>
        <FilledTonalButton>Clear</FilledTonalButton>
      </div>
    </div>
  );
};

export default ConfirmModal;
