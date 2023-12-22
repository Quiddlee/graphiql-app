import { FC, HTMLAttributes } from 'react';

import cn from '@shared/lib/helpers/cn';

type ResizeBarProps = HTMLAttributes<HTMLButtonElement> & {
  direction?: 'horizontal' | 'vertical';
};

const ResizeBar: FC<ResizeBarProps> = ({ className, direction = 'vertical', ...props }) => {
  return (
    <button
      {...props}
      type="button"
      aria-label="resize editor"
      className={cn(
        'rounded-full before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-1.5 before:w-1.5 before:rounded-full before:transition-all before:delay-200 hover:cursor-grab before:hover:bg-primary before:hover:delay-0 active:cursor-grabbing before:active:bg-primary before:active:duration-100 before:active:ease-bounce',
        className,
        {
          'h-4 w-full before:active:w-24': direction === 'vertical',
          'h-full w-4 before:active:h-24': direction === 'horizontal',
        },
      )}
    />
  );
};

export default ResizeBar;
