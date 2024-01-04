import React from 'react';

import { createComponent } from '@lit/react';
import { MdCircularProgress } from '@material/web/progress/circular-progress';

const Spinner = createComponent({
  react: React,
  tagName: 'md-circular-progress',
  elementClass: MdCircularProgress,
});

export default Spinner;
