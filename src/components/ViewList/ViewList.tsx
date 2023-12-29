import { FC, PropsWithChildren, ReactNode } from 'react';

import { View } from '@components/ViewList/context/types';
import useView from '@components/ViewList/hooks/useView';
import useLanguage from '@shared/Context/hooks';

type ViewListProps = PropsWithChildren & {
  render: (view: View, i: number) => ReactNode;
};

const ViewList: FC<ViewListProps> = ({ render, children }) => {
  const { views } = useView();
  const { translation } = useLanguage();

  return (
    <ul className="invisible lg:visible" data-testid="view-list">
      <h2 className="relative px-4 py-[18px]">{translation.nav.viewList.title}</h2>
      {views.map(render)}
      {children}
    </ul>
  );
};

export default ViewList;
