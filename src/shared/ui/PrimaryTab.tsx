import React from 'react';

import { createComponent } from '@lit/react';
import { MdPrimaryTab } from '@material/web/all';

const PrimaryTab = createComponent({
  react: React,
  tagName: 'md-primary-tab',
  elementClass: MdPrimaryTab,
});

export default PrimaryTab;
