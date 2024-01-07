import React from 'react';

import { createComponent } from '@lit/react';
import { MdFilledButton } from '@material/web/all';

const FilledButton = createComponent({
  react: React,
  tagName: 'md-filled-button',
  elementClass: MdFilledButton,
});

export default FilledButton;
