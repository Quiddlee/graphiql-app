import { FC } from 'react';

import Icon from '@/shared/ui/Icon';

type PropsType = { onClick: () => void; title: string };

const BackDocsBtn: FC<PropsType> = ({ onClick, title }: PropsType) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-fit animate-fade-in-section items-center gap-1 rounded-full px-4 py-2 ease-emphasized-decelerate hover:bg-slate-500/30 "
    >
      <Icon className="animation-delay-200 animate-fade-in-screen ease-standard-decelerate">arrow_back_ios</Icon>
      <span key={title} className="animate-fade-in-section truncate text-2xl ease-emphasized-decelerate">
        {title}
      </span>
    </button>
  );
};

export default BackDocsBtn;
