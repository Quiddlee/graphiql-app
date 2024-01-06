import React from 'react';

import { createComponent } from '@lit/react';
import { MdFilledButton } from '@material/web/button/filled-button';

const FilledButton = createComponent({
  react: React,
  tagName: 'md-filled-button',
  elementClass: MdFilledButton,
});

export default FilledButton;
