import { FC, ReactNode } from 'react';

import { NavLink } from 'react-router-dom';

import cn from '@shared/lib/helpers/cn';

type NavButtonProps = {
  to: string;
  children: ReactNode;
};

const NavItem: FC<NavButtonProps> = ({ to, children }) => {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <span
          className={cn(
            'flex items-center gap-3 rounded-full py-4 pl-4 pr-6 transition-all ease-standard hover:bg-[color-mix(in_srgb,_var(--md-sys-color-inverse-surface)_8%,_transparent)]',
            {
              'bg-secondary-container text-on-secondary-container-text hover:bg-[color-mix(in_srgb,_var(--md-sys-color-secondary)_18%,_transparent)]':
                isActive,
            },
          )}
        >
          {children}
        </span>
      )}
    </NavLink>
  );
};

export default NavItem;
