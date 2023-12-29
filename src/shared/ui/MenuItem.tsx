import React from 'react';

import { createComponent } from '@lit/react';
import { MdMenuItem } from '@material/web/all';

const Menu = createComponent({
  react: React,
  tagName: 'md-menu-item',
  elementClass: MdMenuItem,
});

export default Menu;
