import React from 'react';

import { createComponent } from '@lit/react';
import { MdIcon } from '@material/web/icon/icon';
import { MdIconButton } from '@material/web/iconbutton/icon-button';

const Icon = createComponent({
  react: React,
  tagName: 'md-icon',
  elementClass: MdIcon,
});

const IconSlot = createComponent({
  react: React,
  tagName: 'md-icon-button',
  elementClass: MdIconButton,
});

const ShowDocsBtn = ({ onClick }: { onClick: () => void }) => {
  return (
    <IconSlot onClick={onClick} data-testid="show_docs">
      <Icon>article</Icon>
    </IconSlot>
  );
};

export default ShowDocsBtn;
