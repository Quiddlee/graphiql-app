import { FC, ReactNode } from 'react';

import { useLocation } from 'react-router-dom';

import useView from '@components/Nav/hooks/useView';
import ROUTES from '@shared/constants/routes';
import cn from '@shared/lib/helpers/cn';

type TabItemProps = {
  children: ReactNode;
  id: number;
};

const ViewItem: FC<TabItemProps> = ({ children, id }) => {
  const { handleActiveView, activeView } = useView();
  const location = useLocation();

  const isMain = location.pathname.slice(1) === ROUTES.MAIN;
  const isActiveView = activeView === id;
  const isActive = isMain && isActiveView;

  function handleClick() {
    if (id === activeView) return;
    handleActiveView(id);
  }

  return (
    <button type="button" onClick={handleClick} className="block w-full">
      <span
        className={cn(
          'flex origin-left animate-fade-in-standard items-center gap-3 rounded-full py-4 pl-4 pr-6 transition-all ease-standard hover:bg-[color-mix(in_srgb,_var(--md-sys-color-inverse-surface)_8%,_transparent)]',
          {
            'bg-secondary-container text-on-secondary-container-text hover:bg-[color-mix(in_srgb,_var(--md-sys-color-secondary)_18%,_transparent)]':
              isActive,
          },
        )}
      >
        {children}
      </span>
    </button>
  );
};

export default ViewItem;
