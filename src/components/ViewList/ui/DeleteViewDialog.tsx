import { Dispatch, FC, SetStateAction, useCallback, useRef } from 'react';

import { MdDialog } from '@material/web/all';
import { toast } from 'react-toastify';

import useView from '@components/ViewList/hooks/useView';
import useLanguage from '@shared/Context/hooks';
import Dialog from '@shared/ui/Dialog';
import TextButton from '@shared/ui/TextButton';

type DeleteViewDialogProps = {
  id: number;
  onToggle: Dispatch<SetStateAction<boolean>>;
  open: boolean;
};

const DeleteViewDialog: FC<DeleteViewDialogProps> = ({ id, onToggle, open }) => {
  const { handleDeleteView, views } = useView();
  const dialogRef = useRef<MdDialog>(null);
  const { translation } = useLanguage();

  const handleCloseDialog = useCallback(function handleCloseDialog() {
    return dialogRef.current?.close();
  }, []);

  const handleDelete = useCallback(
    async function handleDelete() {
      const viewName = views.find((view) => view.id === id)?.name ?? '';

      await handleCloseDialog();
      handleDeleteView(id);

      toast(
        <>
          {translation.nav.viewList.deleteDialog.snackbar} <span className="font-bold">{viewName}</span>
        </>,
      );
    },
    [handleCloseDialog, handleDeleteView, id, translation.nav.viewList.deleteDialog.snackbar, views],
  );

  return (
    <Dialog data-testid="delete-dialog" ref={dialogRef} open={open} closed={() => onToggle(false)}>
      <h3 slot="headline">{translation.nav.viewList.deleteDialog.title}</h3>
      <p slot="content">{translation.nav.viewList.deleteDialog.content}</p>
      <div slot="actions">
        <TextButton onClick={handleCloseDialog}>{translation.nav.viewList.deleteDialog.cancel}</TextButton>
        <TextButton data-testid="delete-button" onClick={handleDelete}>
          {translation.nav.viewList.deleteDialog.delete}
        </TextButton>
      </div>
    </Dialog>
  );
};

export default DeleteViewDialog;
