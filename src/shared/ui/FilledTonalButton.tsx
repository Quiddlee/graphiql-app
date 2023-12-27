import React from 'react';

import { createComponent } from '@lit/react';
import { MdFilledTonalIconButton } from '@material/web/all';

const FilledTonalButton = createComponent({
  react: React,
  tagName: 'md-filled-tonal-button',
  elementClass: MdFilledTonalIconButton,
});

export default FilledTonalButton;
