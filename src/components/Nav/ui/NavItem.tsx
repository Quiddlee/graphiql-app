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
            'group relative flex items-center gap-3 rounded-full py-4 pl-4 pr-6 ease-linear hover:bg-[color-mix(in_srgb,_var(--md-sys-color-inverse-surface)_8%,_transparent)] hover:duration-0 active:bg-[color-mix(in_srgb,_var(--md-sys-color-inverse-surface)_10%,_transparent)]',
            {
              'text-on-secondary-container-text': isActive,
            },
          )}
        >
          <span
            className={cn(
              'absolute left-0 top-0 h-full w-full scale-x-[.32] rounded-full py-4 pl-4 pr-6 opacity-0 transition-all duration-200 ease-linear',
              {
                'scale-x-100 bg-secondary-container opacity-100 group-hover:bg-[color-mix(in_srgb,_var(--md-sys-color-secondary)_18%,_transparent)] group-active:bg-[color-mix(in_srgb,_var(--md-sys-color-secondary)_20%,_transparent)]':
                  isActive,
              },
            )}
          />
          <span className="relative z-10 flex items-center gap-3">{children}</span>
        </span>
      )}
    </NavLink>
  );
};

export default NavItem;
