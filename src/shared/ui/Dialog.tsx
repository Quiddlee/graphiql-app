import React from 'react';

import { createComponent } from '@lit/react';
import { MdDialog } from '@material/web/all';

const Dialog = createComponent({
  react: React,
  tagName: 'md-dialog',
  elementClass: MdDialog,
});

export default Dialog;
