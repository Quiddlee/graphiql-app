import { FC, MouseEvent, useRef, useState } from 'react';

import { MdMenu } from '@material/web/all';

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
  const { handleDeleteView, views } = useView();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isDeleteDisabled = views.length === 1;

  function handleMenuToggle(e: MouseEvent) {
    e.stopPropagation();
    if (menuRef.current) menuRef.current.open = !menuRef.current.open;
  }

  return (
    <article id={`details-menu-${id}`} className="relative ml-auto flex items-center">
      <RenameViewDialog open={isMenuOpen} id={id} onToggle={setIsMenuOpen} />

      <FilledTonalIconButton
        className="invisible absolute -right-4 group-hover:visible"
        onClick={(e) => handleMenuToggle(e)}
      >
        <Icon>more_vert</Icon>
      </FilledTonalIconButton>

      <Menu positioning="popover" ref={menuRef} anchor={`details-menu-${id}`}>
        <MenuItem
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(true);
          }}
        >
          <span className="flex items-center justify-start gap-[10px]">
            <Icon>edit</Icon> Rename
          </span>
        </MenuItem>
        <MenuItem
          disabled={isDeleteDisabled}
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteView(id);
          }}
        >
          <span className="flex items-center justify-start gap-[10px]">
            <Icon>delete</Icon> Delete
          </span>
        </MenuItem>
      </Menu>
    </article>
  );
};

export default Details;
