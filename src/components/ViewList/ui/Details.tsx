import { FC, MouseEvent, useCallback, useRef, useState } from 'react';

import { MdMenu } from '@material/web/all';

import useView from '@components/ViewList/hooks/useView';
import DeleteViewDialog from '@components/ViewList/ui/DeleteViewDialog';
import RenameViewDialog from '@components/ViewList/ui/RenameViewDialog';
import cn from '@shared/lib/helpers/cn';
import FilledTonalIconButton from '@shared/ui/FilledTonalIconButton';
import Icon from '@shared/ui/Icon';
import Menu from '@shared/ui/Menu';
import MenuItem from '@shared/ui/MenuItem';

type DetailsProps = {
  id: number;
};

const Details: FC<DetailsProps> = ({ id }) => {
  const menuRef = useRef<MdMenu>(null);
  const { views } = useView();
  const [isDialogRenameOpen, setIsDialogRenameOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const isDeleteDisabled = views.length === 1;

  function handleMenuToggle(e: MouseEvent) {
    e.stopPropagation();
    if (menuRef.current) menuRef.current.open = !menuRef.current.open;
  }

  const handleOpenDeleteDialog = useCallback(function handleOpenDeleteDialog(e: MouseEvent) {
    e.stopPropagation();
    setIsDeleteDialogOpen(true);
  }, []);

  return (
    <article id={`details-menu-${id}`} className="relative ml-auto flex items-center brightness-125">
      {isDialogRenameOpen && <RenameViewDialog open={isDialogRenameOpen} id={id} onToggle={setIsDialogRenameOpen} />}
      {isDeleteDialogOpen && <DeleteViewDialog open={isDeleteDialogOpen} id={id} onToggle={setIsDeleteDialogOpen} />}

      <FilledTonalIconButton
        className={cn('invisible absolute -right-4 group-hover:visible', {
          visible: isDialogRenameOpen || isDeleteDialogOpen,
        })}
        onClick={(e) => handleMenuToggle(e)}
      >
        <Icon>more_vert</Icon>
      </FilledTonalIconButton>

      <Menu positioning="popover" ref={menuRef} anchor={`details-menu-${id}`}>
        <MenuItem
          onClick={(e) => {
            e.stopPropagation();
            setIsDialogRenameOpen(true);
          }}
        >
          <span className="flex items-center justify-start gap-[10px]">
            <Icon>edit</Icon> Rename
          </span>
        </MenuItem>
        <MenuItem disabled={isDeleteDisabled} onClick={handleOpenDeleteDialog}>
          <span className="flex items-center justify-start gap-[10px]">
            <Icon>delete</Icon> Delete
          </span>
        </MenuItem>
      </Menu>
    </article>
  );
};

export default Details;
