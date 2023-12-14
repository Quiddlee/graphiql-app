import React from 'react';

import { createComponent } from '@lit/react';
import { MdFab } from '@material/web/all';

const Fab = createComponent({
  react: React,
  tagName: 'md-fab',
  elementClass: MdFab,
});

export default Fab;
