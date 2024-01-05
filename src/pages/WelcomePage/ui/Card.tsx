import { FC } from 'react';

import useRadialHover from '@shared/lib/hooks/useRadialHover';
import Icon from '@shared/ui/Icon';

type CardProps = {
  icon: string;
  title: string;
  descr: string;
};

const RADIAL_HOVER_RADIUS = 450;
const ANIMATION_DURATION = 350;
const RADIAL_HOVER_COLOR = 'rgba(249,117,131, 0.2)';

const Card: FC<CardProps> = ({ icon, title, descr }) => {
  const { handleMouseOut, handleMouseMove, containerRef } = useRadialHover({
    size: RADIAL_HOVER_RADIUS,
    animationDuration: ANIMATION_DURATION,
    color: RADIAL_HOVER_COLOR,
  });

  return (
    <div className="rounded-3xl border border-white border-opacity-10 bg-surface-container">
      <article
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseOut}
        className="grid h-[280px] w-[328px] rounded-3xl bg-surface-container p-6 text-sm text-tertiary"
      >
        <Icon className="h-[100px] w-[100px] justify-self-center text-[100px]">{icon}</Icon>
        <div className="self-end">
          <h4>{title}</h4>
          <p className="text-outline-text">{descr}</p>
        </div>
      </article>
    </div>
  );
};

export default Card;
