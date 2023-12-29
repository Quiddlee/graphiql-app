import React from 'react';

import { createComponent } from '@lit/react';
import { MdSwitch } from '@material/web/switch/switch';

const Switch = createComponent({
  react: React,
  tagName: 'md-switch',
  elementClass: MdSwitch,
});

export default Switch;
