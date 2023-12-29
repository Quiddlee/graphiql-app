import { Dispatch, FC, SetStateAction } from 'react';

import { toast } from 'react-toastify';

import FilledTonalButton from '@/shared/ui/FilledTonalButton';
import Icon from '@/shared/ui/Icon';
import TextButton from '@/shared/ui/TextButton';

import ClearUndo from './ClearUndo';

type PropsType = {
  setIsShown: Dispatch<SetStateAction<boolean>>;
  locales: {
    title: string;
    subtitle: string;
    cancel: string;
    confirm: string;
    undoTitle: string;
    cancelBtn: string;
  };
};

const ConfirmModal: FC<PropsType> = ({ setIsShown, locales }) => {
  const { title, subtitle, cancel, confirm, undoTitle, cancelBtn } = locales;
  return (
    <div className="w-[312px] rounded-4xl bg-surface-container-high p-6 text-center font-[500] text-on-surface">
      <Icon>delete</Icon>
      <h3 className="mt-4 text-2xl">{title}</h3>
      <p className="mt-4 text-start text-sm text-on-surface-variant">{subtitle}</p>
      <div className="mt-6 flex justify-end gap-2">
        <TextButton onClick={() => setIsShown((prev) => !prev)}>{cancel}</TextButton>
        <FilledTonalButton
          onClick={() => {
            toast(<ClearUndo closeToast={() => {}} title={undoTitle} btn={cancelBtn} />);
            setIsShown((prev) => !prev);
          }}
        >
          {confirm}
        </FilledTonalButton>
      </div>
    </div>
  );
};

export default ConfirmModal;
