import { Dispatch, FC, SetStateAction, useRef } from 'react';

import { MdDialog } from '@material/web/all';
import { toast } from 'react-toastify';

import FilledTonalButton from '@/shared/ui/FilledTonalButton';
import Icon from '@/shared/ui/Icon';
import TextButton from '@/shared/ui/TextButton';
import Dialog from '@shared/ui/Dialog';

import ClearUndo from './ClearUndo';

type PropsType = {
  setIsShown: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  locales: {
    title: string;
    subtitle: string;
    cancel: string;
    confirm: string;
    undoTitle: string;
    cancelBtn: string;
  };
};

const ConfirmModal: FC<PropsType> = ({ open, setIsShown, locales }) => {
  const { title, subtitle, cancel, confirm, undoTitle, cancelBtn } = locales;
  const dialogRef = useRef<MdDialog>(null);

  return (
    <Dialog open={open} ref={dialogRef} className="max-w-[320px]" closed={() => setIsShown(false)}>
      <div slot="headline">{title}</div>
      <Icon slot="icon">delete_outline</Icon>
      <form id="form" slot="content" method="dialog">
        {subtitle}
      </form>
      <div slot="actions">
        <TextButton
          onClick={() => {
            if (dialogRef.current) dialogRef.current.close();
          }}
        >
          {cancel}
        </TextButton>
        <FilledTonalButton
          onClick={() => {
            toast(<ClearUndo closeToast={() => {}} title={undoTitle} btn={cancelBtn} />);
            if (dialogRef.current) dialogRef.current.close();
          }}
        >
          {confirm}
        </FilledTonalButton>
      </div>
    </Dialog>
  );
};

export default ConfirmModal;
