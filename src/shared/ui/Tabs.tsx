import React from 'react';

import { createComponent } from '@lit/react';
import { MdTabs } from '@material/web/all';

const Tabs = createComponent({
  react: React,
  tagName: 'md-tabs',
  elementClass: MdTabs,
  events: {
    onchange: 'change',
  },
});

export default Tabs;
