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

const CloseDocsBtn = ({ onClick, className }: { onClick: () => void; className: string }) => {
  return (
    <IconSlot onClick={onClick} className={className}>
      <Icon>close</Icon>
    </IconSlot>
  );
};

export default CloseDocsBtn;
