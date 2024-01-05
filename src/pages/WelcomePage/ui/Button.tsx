import { FC, HTMLAttributes } from 'react';

import cn from '@shared/lib/helpers/cn';

const Button: FC<HTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      type="button"
      className={cn(
        'group relative inline-block h-[60px] w-[200px] overflow-hidden rounded-full text-black',
        className,
      )}
    >
      <div className="h-[60px] w-[200px] overflow-hidden rounded-full bg-[#FFAB70] [transition:_transform_1.8s_cubic-bezier(.19,1,.22,1)] group-hover:scale-[.94]">
        <span className="absolute bottom-0 left-1/2 z-20 block h-[200%] w-[120%] -translate-x-0 translate-y-[120px] bg-[#a474ff] [border-radius:999px_999px_0_0] [translate:-50%] group-hover:translate-y-[10px] group-hover:[border-radius:60%_60%_0_0] group-hover:[transition:_transform_1.2s_cubic-bezier(.19,1,.22,1)_200ms,_border-radius_.2s_cubic-bezier(.19,1,.22,1)_270ms]" />
        <span className="absolute bottom-0 left-1/2 z-20 block h-[200%] w-[120%] -translate-x-0 translate-y-[120px] bg-[#17f1d1] [border-radius:999px_999px_0_0] [translate:-50%] group-hover:translate-y-[10px] group-hover:[border-radius:60%_60%_0_0] group-hover:[transition:_transform_1.2s_cubic-bezier(.19,1,.22,1)_300ms,_border-radius_.2s_cubic-bezier(.19,1,.22,1)_470ms]" />
        <span className="absolute bottom-0 left-1/2 z-20 block h-[200%] w-[120%] -translate-x-0 translate-y-[120px] bg-[#FFAB70] [border-radius:999px_999px_0_0] [translate:-50%] group-hover:translate-y-[10px] group-hover:[border-radius:60%_60%_0_0] group-hover:[transition:_transform_1.2s_cubic-bezier(.19,1,.22,1)_380ms,_border-radius_.2s_cubic-bezier(.19,1,.22,1)_670ms]" />
      </div>

      <span className="absolute inset-0 z-10 m-auto inline-block w-4/5 translate-y-4 text-lg font-semibold group-hover:-translate-y-1 group-hover:opacity-0 group-hover:[transition:_transform_1s_cubic-bezier(.32,.99,.49,.99),_opacity_.4s]">
        {children}
      </span>
      <span className="absolute inset-0 z-10 m-auto inline-block w-4/5 translate-y-1/2 text-lg font-semibold opacity-0 group-hover:translate-y-4 group-hover:opacity-100 group-hover:[transition:_1s_all_cubic-bezier(.32,.99,.49,.99)]">
        {children}
      </span>
    </button>
  );
};

export default Button;
