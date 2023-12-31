import { FC, PropsWithChildren, ReactNode } from 'react';

import { View } from '@components/ViewList/context/types';
import useView from '@components/ViewList/hooks/useView';
import useLanguage from '@shared/Context/hooks';
import cn from '@shared/lib/helpers/cn';
import useScreen from '@shared/lib/hooks/useScreen';

type ViewListProps = PropsWithChildren & {
  render: (view: View, i: number) => ReactNode;
  isActive?: boolean;
};

const ViewList: FC<ViewListProps> = ({ render, children, isActive }) => {
  const { views } = useView();
  const { translation } = useLanguage();
  const screenType = useScreen();

  const isDesktop = screenType === 'desktop';

  return (
    (isActive || isDesktop) && (
      <ul
        className={cn('invisible lg:visible', {
          'visible overflow-auto': isActive,
        })}
        data-testid="view-list"
      >
        <h2 className="relative px-4 py-[18px]">{translation.nav.viewList.title}</h2>
        {views.map(render)}
        {children}
      </ul>
    )
  );
};

export default ViewList;