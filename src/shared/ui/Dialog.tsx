import React, { forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

import { createComponent } from '@lit/react';
import { MdDialog } from '@material/web/all';
import { createPortal } from 'react-dom';

import cn from '@shared/lib/helpers/cn';

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

const Dialog = forwardRef<MdDialog, DialogProps>(({ children, closed, className, ...props }, ref) => {
  return createPortal(
    <DialogComponent className={cn('w-[512px]', className)} ref={ref} closed={closed} {...props}>
      {children}
    </DialogComponent>,
    document.body,
  );
});

Dialog.displayName = 'Dialog';

export default Dialog;
