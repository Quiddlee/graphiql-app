import { FC, HTMLAttributes } from 'react';

import github from '@assets/github.svg';
import rsschool from '@assets/rs_school.svg';
import cn from '@shared/lib/helpers/cn';

const Footer: FC<HTMLAttributes<HTMLElement>> = ({ className }) => {
  return (
    <footer className={cn('grid items-center justify-center justify-items-center gap-1.5', className)}>
      <article className="flex gap-3 text-sm">
        <a target="_blank" className="flex gap-1.5" href="https://github.com/Quiddlee" rel="noreferrer">
          <img src={github} alt="" />
          Quiddle
        </a>
        <a target="_blank" className="flex gap-1.5" href="https://github.com/Tedzury" rel="noreferrer">
          <img src={github} alt="" />
          Tedzury
        </a>
        <a target="_blank" className="flex gap-1.5" href="https://github.com/barrydilan" rel="noreferrer">
          <img src={github} alt="" />
          Barrydilan
        </a>
      </article>
      <article className="flex items-center gap-3 text-sm">
        2024
        <a target="_blank" aria-label="the link to the RS School webstite" href="https://rs.school/" rel="noreferrer">
          <img width="35" src={rsschool} alt="" />
        </a>
      </article>
    </footer>
  );
};

export default Footer;
