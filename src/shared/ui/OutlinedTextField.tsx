import React from 'react';

import { createComponent } from '@lit/react';
import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';

const OutlinedTextField = createComponent({
  react: React,
  tagName: 'md-outlined-text-field',
  elementClass: MdOutlinedTextField,
});

export default OutlinedTextField;
