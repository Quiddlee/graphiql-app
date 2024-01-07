import { FC, HTMLAttributes } from 'react';

import ghIcon from '@assets/github.svg';
import rsLogo from '@assets/rs_school.svg';
import cn from '@shared/lib/helpers/cn';

const Footer: FC<HTMLAttributes<HTMLElement>> = ({ className }) => {
  return (
    <footer className={cn('grid items-center justify-center justify-items-center gap-1.5 text-on-surface', className)}>
      <div className="flex gap-3">
        <a href="https://github.com/Quiddlee" className="flex gap-[7px]">
          <img src={ghIcon} alt="" />
          <span>Quiddle</span>
        </a>
        <a href="https://github.com/Tedzury" className="flex gap-[7px]">
          <img src={ghIcon} alt="" />
          <span>Tedzury</span>
        </a>
        <a href="https://github.com/barrydilan" className="flex gap-[7px]">
          <img src={ghIcon} alt="" />
          <span>Barrydilan</span>
        </a>
      </div>
      <div className="mt-[6px] flex items-center gap-3">
        <span>2023</span>
        <a href="https://rs.school/react/">
          <img src={rsLogo} alt="" className="block w-[50px]" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
