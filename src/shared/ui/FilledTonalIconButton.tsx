import React from 'react';

import { createComponent } from '@lit/react';
import { MdFilledTonalIconButton } from '@material/web/all';

const FilledTonalIconButton = createComponent({
  react: React,
  tagName: 'md-filled-tonal-icon-button',
  elementClass: MdFilledTonalIconButton,
});

export default FilledTonalIconButton;
