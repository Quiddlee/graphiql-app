import { Dispatch, FC, SetStateAction, useCallback, useRef, useState } from 'react';

import { MdDialog } from '@material/web/all';
import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';
import { toast } from 'react-toastify';

import useView from '@components/ViewList/hooks/useView';
import { useLanguage } from '@shared/Context/hooks';
import viewTransition from '@shared/lib/helpers/viewTransition';
import Dialog from '@shared/ui/Dialog';
import FilledTonalButton from '@shared/ui/FilledTonalButton';
import OutlinedTextField from '@shared/ui/OutlinedTextField';
import TextButton from '@shared/ui/TextButton';

type RenameViewDialogProps = {
  id: number;
  onToggle: Dispatch<SetStateAction<boolean>>;
  open: boolean;
};

const RenameViewDialog: FC<RenameViewDialogProps> = ({ id, open, onToggle }) => {
  const { handleRenameView, views } = useView();
  const { translation } = useLanguage();

  const viewName = views.find((view) => view.id === id)?.name ?? '';
  const [val, setVal] = useState(viewName);
  const [isDisabled, setIsDisabled] = useState(true);

  const dialogRef = useRef<MdDialog>(null);

  if (val === viewName && !isDisabled) {
    setIsDisabled(true);
  } else if (val !== viewName && isDisabled) {
    setIsDisabled(false);
  }

  const handleCloseDialog = useCallback(function handleCloseDialog() {
    if (dialogRef.current) dialogRef.current.close();
  }, []);

  const handleRename = useCallback(
    (newName: string) => {
      viewTransition(() => handleRenameView(id, newName));
      handleCloseDialog();
      toast(
        <>
          {translation.nav.viewList.renameDialog.snackbar} <span className="font-bold">{newName}</span>
        </>,
      );
    },
    [handleCloseDialog, handleRenameView, id, translation.nav.viewList.renameDialog.snackbar],
  );

  return (
    <Dialog data-testid="rename-dialog" ref={dialogRef} closed={() => onToggle(false)} open={open}>
      <h3 slot="headline">{translation.nav.viewList.renameDialog.title}</h3>
      <form slot="content" id="form-id" method="dialog">
        <OutlinedTextField
          data-testid="rename-input"
          onInput={(e) => {
            setVal((e.target as MdOutlinedTextField).value);
          }}
          className="w-full text-start"
          textDirection="ltr"
          value={val}
        />
      </form>
      <div slot="actions">
        <TextButton data-testid="close-dialog" onClick={handleCloseDialog}>
          {translation.nav.viewList.renameDialog.cancel}
        </TextButton>
        <FilledTonalButton data-testid="rename-button" onClick={() => handleRename(val)} disabled={isDisabled}>
          {translation.nav.viewList.renameDialog.rename}
        </FilledTonalButton>
      </div>
    </Dialog>
  );
};

export default RenameViewDialog;
