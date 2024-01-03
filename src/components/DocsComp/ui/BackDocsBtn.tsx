import { FC } from 'react';

import Icon from '@/shared/ui/Icon';

type PropsType = { onClick: () => void; title: string };

const BackDocsBtn: FC<PropsType> = ({ onClick, title }: PropsType) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-1 rounded-full p-2 hover:bg-slate-500/30 "
    >
      <Icon>arrow_back_ios</Icon>
      <span className="truncate text-2xl">{title}</span>
    </button>
  );
};

export default BackDocsBtn;
