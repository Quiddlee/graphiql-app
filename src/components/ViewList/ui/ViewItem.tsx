import { FC, ReactNode } from 'react';

import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import useView from '@components/ViewList/hooks/useView';
import ROUTES from '@shared/constants/routes';
import cn from '@shared/lib/helpers/cn';

type TabItemProps = {
  children: ReactNode;
  id: number;
  onClick?: () => void;
};

const animations = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { type: 'spring', stiffness: 550, damping: 40 },
};

const ViewItem: FC<TabItemProps> = ({ children, id, onClick }) => {
  const { handleActiveView, activeView } = useView();
  const location = useLocation();

  const isMain = location.pathname.slice(1) === ROUTES.MAIN;
  const isActiveView = activeView === id;
  const isActive = isMain && isActiveView;

  function handleClick() {
    if (id === activeView && isMain) return;
    handleActiveView(id);
    onClick?.();
  }

  return (
    <motion.button
      {...animations}
      layout
      data-testid="view-item"
      type="button"
      onClick={handleClick}
      className="group relative inline-block w-full animate-fade-in-screen rounded-full"
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
      <span
        className={cn(
          'relative z-10 flex origin-left items-center gap-3 rounded-full py-4 pl-4 pr-6 group-hover:bg-[color-mix(in_srgb,_var(--md-sys-color-inverse-surface)_8%,_transparent)] group-active:bg-[color-mix(in_srgb,_var(--md-sys-color-inverse-surface)_10%,_transparent)]',
          {
            'text-on-secondary-container-text': isActive,
          },
        )}
      >
        {children}
      </span>
    </motion.button>
  );
};

export default ViewItem;
