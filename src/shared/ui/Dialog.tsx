import React, { forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

import { createComponent } from '@lit/react';
import { MdDialog } from '@material/web/all';
import { createPortal } from 'react-dom';

const DialogComponent = createComponent({
  react: React,
  tagName: 'md-dialog',
  elementClass: MdDialog,
  events: {
    closed: 'closed',
  },
});

type DialogProps = HTMLAttributes<MdDialog> &
  PropsWithChildren & {
    open: boolean;
    closed: () => void;
  };

const Dialog = forwardRef<MdDialog, DialogProps>(({ children, closed, ...props }, ref) => {
  return createPortal(
    <DialogComponent ref={ref} closed={closed} {...props}>
      {children}
    </DialogComponent>,
    document.body,
  );
});

Dialog.displayName = 'Dialog';

export default Dialog;
