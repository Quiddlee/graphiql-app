import { FC, PropsWithChildren, ReactNode } from 'react';

import useView from '@components/Nav/hooks/useView';
import { View } from '@components/ViewList/context/types';

type ViewListProps = PropsWithChildren & {
  render: (view: View, i: number) => ReactNode;
};

const ViewList: FC<ViewListProps> = ({ render, children }) => {
  const { views } = useView();

  return (
    <ul>
      <h2 className="relative px-4 py-[18px]">Editor views</h2>
      {views.map(render)}
      {children}
    </ul>
  );
};

export default ViewList;
