import { FC } from 'react';

import Icon from '@shared/ui/Icon';

type CardProps = {
  icon: string;
  title: string;
  descr: string;
};

const Card: FC<CardProps> = ({ icon, title, descr }) => {
  return (
    <article className="grid h-[280px] w-[328px] rounded-3xl bg-surface-container p-6 text-sm">
      <Icon className="h-[100px] w-[100px] justify-self-center text-[100px] text-primary">{icon}</Icon>
      <div className="self-end">
        <h4 className="text-primary">{title}</h4>
        <p className="text-outline-text">{descr}</p>
      </div>
    </article>
  );
};

export default Card;
