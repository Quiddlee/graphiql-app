import React from 'react';

import { createComponent } from '@lit/react';
import { MdTextButton } from '@material/web/all';

const TextButton = createComponent({
  react: React,
  tagName: 'md-text-button',
  elementClass: MdTextButton,
});

export default TextButton;
