import { Dispatch, FC, SetStateAction, useCallback, useRef } from 'react';

import { MdDialog } from '@material/web/all';
import { toast } from 'react-toastify';

import useView from '@components/Nav/hooks/useView';
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
          Deleted <span className="font-bold">{viewName}</span>
        </>,
      );
    },
    [handleCloseDialog, handleDeleteView, id, views],
  );

  return (
    <Dialog ref={dialogRef} open={open} closed={() => onToggle(false)}>
      <h3 slot="headline">Delete view?</h3>
      <p slot="content">
        You&apos;ll no longer see this view. This will also delete related activity like headers, responses, and
        variables.
      </p>
      <div slot="actions">
        <TextButton onClick={handleCloseDialog}>Cancel</TextButton>
        <TextButton onClick={handleDelete}>Delete</TextButton>
      </div>
    </Dialog>
  );
};

export default DeleteViewDialog;
