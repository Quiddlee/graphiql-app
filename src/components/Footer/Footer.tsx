import { FC, HTMLAttributes } from 'react';

import rsLogo from '@assets/rs_school.svg';
import cn from '@shared/lib/helpers/cn';
import GithubIcon from '@shared/ui/GithubIcon';

const Footer: FC<HTMLAttributes<HTMLElement>> = ({ className }) => {
  return (
    <footer className={cn('grid items-center justify-center justify-items-center gap-1.5 text-on-surface', className)}>
      <div className="flex gap-3">
        <a href="https://github.com/Quiddlee" className="flex items-center gap-[7px]">
          <GithubIcon />
          <span>Quiddle</span>
        </a>
        <a href="https://github.com/Tedzury" className="flex items-center gap-[7px]">
          <GithubIcon />
          <span>Tedzury</span>
        </a>
        <a href="https://github.com/barrydilan" className="flex items-center gap-[7px]">
          <GithubIcon />
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
