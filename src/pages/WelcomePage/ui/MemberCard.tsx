import { FC, ReactNode } from 'react';

import cn from '@shared/lib/helpers/cn';

type MemberCardProps = {
  photo: string;
  name: string;
  descr: string | ReactNode;
  className?: string;
};

const MemberCard: FC<MemberCardProps> = ({ photo, name, descr, className }) => {
  return (
    <article className={cn(className)}>
      <img className="h-[350px] w-[350px] rounded-3xl object-cover" src={photo} alt={`Team member ${name}`} />
      <p className="mt-6 text-lg text-outline-text">{descr}</p>
      <h3 className="mt-4 text-4xl">{name}</h3>
    </article>
  );
};

export default MemberCard;
