import React from 'react';

import { createComponent } from '@lit/react';
import { MdIconButton } from '@material/web/all';

const IconButton = createComponent({
  react: React,
  tagName: 'md-icon-button',
  elementClass: MdIconButton,
});

export default IconButton;
