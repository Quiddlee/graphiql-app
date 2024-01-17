import React from 'react';

import { createComponent } from '@lit/react';
import { MdMenu } from '@material/web/all';

const Menu = createComponent({
  react: React,
  tagName: 'md-menu',
  elementClass: MdMenu,
});

export default Menu;
