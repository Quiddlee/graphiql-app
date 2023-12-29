import React from 'react';

import { createComponent } from '@lit/react';
import { MdOutlinedButton } from '@material/web/button/outlined-button';

const OutlinedButton = createComponent({
  react: React,
  tagName: 'md-outlined-button',
  elementClass: MdOutlinedButton,
});

export default OutlinedButton;
