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

const PassVisibilityIcon = ({ onClick }: { onClick: () => void }) => {
  return (
    <IconSlot toggle slot="trailing-icon" onClick={onClick} type="button">
      <Icon>visibility</Icon>
      <Icon slot="selected">visibility_off</Icon>
    </IconSlot>
  );
};

export default PassVisibilityIcon;
