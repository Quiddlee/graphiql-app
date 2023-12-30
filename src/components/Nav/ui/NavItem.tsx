import { FC, ReactNode } from 'react';

import { NavLink, NavLinkProps } from 'react-router-dom';

import cn from '@shared/lib/helpers/cn';

type NavButtonProps = NavLinkProps & {
  to: string;
  children: ReactNode;
  isExpand: boolean;
};

const NavItem: FC<NavButtonProps> = ({ to, style, isExpand, children, ...props }) => {
  return (
    <NavLink style={style} className="flex justify-center lg:inline" {...props} to={to}>
      {({ isActive }) => (
        <span
          className={cn(
            'group relative flex w-full items-center justify-center gap-3 rounded-full ease-linear before:absolute before:-top-1 before:left-3 before:h-[32px] before:w-[56px] before:rounded-full hover:duration-0 before:hover:bg-[color-mix(in_srgb,_var(--md-sys-color-inverse-surface)_10%,_transparent)] lg:justify-start lg:py-4 lg:pl-4 lg:pr-6 lg:before:hidden lg:hover:bg-[color-mix(in_srgb,_var(--md-sys-color-inverse-surface)_8%,_transparent)] lg:active:bg-[color-mix(in_srgb,_var(--md-sys-color-inverse-surface)_10%,_transparent)]',
            {
              'text-on-secondary-container-text': isActive,
              'origin-left justify-start py-4 pl-4 pr-6 duration-[inherit] ease-[inherit] before:hidden hover:bg-[color-mix(in_srgb,_var(--md-sys-color-inverse-surface)_8%,_transparent)] active:bg-[color-mix(in_srgb,_var(--md-sys-color-inverse-surface)_10%,_transparent)]':
                isExpand,
            },
          )}
        >
          <span
            className={cn(
              'absolute -top-1 left-3 h-[32px] w-[56px] scale-x-[.32] rounded-full py-4 pl-4 pr-6 opacity-0 transition-all duration-200 ease-linear lg:left-0 lg:top-0 lg:h-full lg:w-full',
              {
                'scale-x-100 bg-secondary-container opacity-100 group-active:bg-[color-mix(in_srgb,_var(--md-sys-color-secondary)_20%,_transparent)] lg:group-hover:bg-[color-mix(in_srgb,_var(--md-sys-color-secondary)_18%,_transparent)]':
                  isActive,
                'left-0 top-0 h-full w-full': isExpand,
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
