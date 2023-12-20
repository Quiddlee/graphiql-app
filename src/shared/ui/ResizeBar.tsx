import { FC, HTMLAttributes } from 'react';

import cn from '@shared/lib/helpers/cn';

const ResizeBar: FC<HTMLAttributes<HTMLButtonElement>> = ({ className, ...props }) => {
  return (
    <button
      {...props}
      type="button"
      aria-label="resize editor"
      className={cn(
        'absolute -top-4 h-4 w-full cursor-row-resize rounded-full before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-1.5 before:w-1.5 before:rounded-full before:transition-all before:delay-200 before:hover:bg-primary before:hover:delay-0 before:active:w-1/6 before:active:bg-primary before:active:duration-100 before:active:ease-bounce',
        className,
      )}
    />
  );
};

export default ResizeBar;
