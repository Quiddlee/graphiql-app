import React from 'react';

import { createComponent } from '@lit/react';
import { MdFilledTonalButton } from '@material/web/button/filled-tonal-button';

const FilledTonalButton = createComponent({
  react: React,
  tagName: 'md-filled-tonal-button',
  elementClass: MdFilledTonalButton,
});

export default FilledTonalButton;
