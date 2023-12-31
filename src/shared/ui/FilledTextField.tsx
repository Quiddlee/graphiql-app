import React from 'react';

import { createComponent } from '@lit/react';
import { MdFilledTextField } from '@material/web/textfield/filled-text-field';

const FilledTextField = createComponent({
  react: React,
  tagName: 'md-filled-text-field',
  elementClass: MdFilledTextField,
  events: {
    onChange: 'change',
  },
});

export default FilledTextField;
