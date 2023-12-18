import React from 'react';

import { createComponent } from '@lit/react';
import { MdFilledIconButton } from '@material/web/all';

const FilledIconButton = createComponent({
  react: React,
  tagName: 'md-filled-icon-button',
  elementClass: MdFilledIconButton,
});

export default FilledIconButton;
