import { FC, MouseEvent, useCallback, useRef, useState } from 'react';

import { MdDialog, MdMenu } from '@material/web/all';
import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';

import useView from '@components/Nav/hooks/useView';
import Dialog from '@shared/ui/Dialog';
import FilledTonalButton from '@shared/ui/FilledTonalButton';
import FilledTonalIconButton from '@shared/ui/FilledTonalIconButton';
import Icon from '@shared/ui/Icon';
import Menu from '@shared/ui/Menu';
import MenuItem from '@shared/ui/MenuItem';
import OutlinedTextField from '@shared/ui/OutlinedTextField';
import TextButton from '@shared/ui/TextButton';

const Details: FC<{ id: number }> = ({ id }) => {
  const menuRef = useRef<MdMenu>(null);
  const dialogRef = useRef<MdDialog>(null);
  const { handleRenameView, views } = useView();

  const viewName = views[id].name;
  const [val, setVal] = useState(viewName);
  const [isDisabled, setIsDisabled] = useState(true);

  if (val === viewName && !isDisabled) {
    setIsDisabled(true);
  } else if (val !== viewName && isDisabled) {
    setIsDisabled(false);
  }

  function handleMenuToggle(e: MouseEvent) {
    e.stopPropagation();

    if (!menuRef.current) return;

    menuRef.current.open = !menuRef.current.open;
  }

  const handleDialogOpen = useCallback(function handleDialogOpen() {
    if (!dialogRef.current) return;
    dialogRef.current.show();
  }, []);

  const handleDialogClose = useCallback(function handleDialogClose() {
    if (!dialogRef.current) return;
    dialogRef.current.close();
  }, []);

  const handleRename = useCallback(
    function handleRename(newName: string) {
      handleRenameView(id, newName);
      handleDialogClose();
    },
    [handleRenameView, id, handleDialogClose],
  );

  return (
    <>
      <Dialog ref={dialogRef}>
        <h3 className="pr-60" slot="headline">
          Rename this view
        </h3>
        <form slot="content" id="form-id" method="dialog">
          <OutlinedTextField
            onInput={(e) => {
              setVal((e.target as MdOutlinedTextField).value);
            }}
            className="w-full text-start"
            textDirection="ltr"
            value={val}
          />
        </form>
        <div slot="actions">
          <TextButton onClick={handleDialogClose}>Cancel</TextButton>
          <FilledTonalButton onClick={() => handleRename(val)} disabled={isDisabled}>
            Rename
          </FilledTonalButton>
        </div>
      </Dialog>

      <article id={`details-menu-${id}`} className="relative ml-auto flex items-center">
        <FilledTonalIconButton
          className="invisible absolute -right-4 group-hover:visible"
          onClick={(e) => handleMenuToggle(e)}
        >
          <Icon>more_vert</Icon>
        </FilledTonalIconButton>

        <Menu positioning="popover" ref={menuRef} anchor={`details-menu-${id}`}>
          <MenuItem onClick={handleDialogOpen}>
            <span className="flex items-center justify-start gap-[10px]">
              <Icon>edit</Icon> Rename
            </span>
          </MenuItem>
          <MenuItem>
            <span className="flex items-center justify-start gap-[10px]">
              <Icon>delete</Icon> Delete
            </span>
          </MenuItem>
        </Menu>
      </article>
    </>
  );
};

export default Details;
