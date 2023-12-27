import { FC, MouseEvent, useCallback, useRef } from 'react';

import { MdDialog, MdMenu } from '@material/web/all';

import useView from '@components/Nav/hooks/useView';
import RenameViewDialog from '@components/ViewList/ui/RenameViewDialog';
import FilledTonalIconButton from '@shared/ui/FilledTonalIconButton';
import Icon from '@shared/ui/Icon';
import Menu from '@shared/ui/Menu';
import MenuItem from '@shared/ui/MenuItem';

type DetailsProps = {
  id: number;
};

const Details: FC<DetailsProps> = ({ id }) => {
  const menuRef = useRef<MdMenu>(null);
  const dialogRef = useRef<MdDialog>(null);
  const { handleDeleteView, views } = useView();

  const isDeleteDisabled = views.length === 1;

  function handleMenuToggle(e: MouseEvent) {
    e.stopPropagation();
    if (menuRef.current) menuRef.current.open = !menuRef.current.open;
  }

  const handleDialogToggle = useCallback((open: boolean) => {
    if (!dialogRef.current) return;

    if (open) {
      dialogRef.current.show();
    } else {
      dialogRef.current.close();
    }
  }, []);

  const handleDelete = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation();
      handleDeleteView(id);
    },
    [handleDeleteView, id],
  );

  return (
    <article id={`details-menu-${id}`} className="relative ml-auto flex items-center">
      <RenameViewDialog id={id} ref={dialogRef} onToggle={handleDialogToggle} />

      <FilledTonalIconButton
        className="invisible absolute -right-4 group-hover:visible"
        onClick={(e) => handleMenuToggle(e)}
      >
        <Icon>more_vert</Icon>
      </FilledTonalIconButton>

      <Menu positioning="popover" ref={menuRef} anchor={`details-menu-${id}`}>
        <MenuItem onClick={() => handleDialogToggle(true)}>
          <span className="flex items-center justify-start gap-[10px]">
            <Icon>edit</Icon> Rename
          </span>
        </MenuItem>
        <MenuItem disabled={isDeleteDisabled} onClick={handleDelete}>
          <span className="flex items-center justify-start gap-[10px]">
            <Icon>delete</Icon> Delete
          </span>
        </MenuItem>
      </Menu>
    </article>
  );
};

export default Details;
