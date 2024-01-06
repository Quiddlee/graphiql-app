import { FC, ReactNode, useRef, useState } from 'react';

import { useMotionValueEvent, useScroll, useSpring } from 'framer-motion';

import { scrollSpring } from '@pages/WelcomePage/const/const';
import cn from '@shared/lib/helpers/cn';

type MemberCardProps = {
  photo: string;
  name: string;
  descr: string | ReactNode;
  className?: string;
};

const SCALE_START = 0.8;
const SCALE_MULTIPLIER = 0.3;

const MemberCard: FC<MemberCardProps> = ({ photo, name, descr, className }) => {
  const cardRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const imgContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end end'],
  });
  const [imgContainerScale, setImgContainerScale] = useState(SCALE_START);
  const [imgScale, setImgScale] = useState(0.96 / SCALE_START);

  const springValue = useSpring(scrollYProgress, scrollSpring);

  useMotionValueEvent(springValue, 'change', (latest) => {
    const latestScaleValue = SCALE_START + latest * SCALE_MULTIPLIER;
    const inverseScaleValue = 0.96 / latestScaleValue;

    setImgContainerScale(latestScaleValue);
    setImgScale(inverseScaleValue);
  });

  return (
    <article ref={cardRef} className={cn(className)}>
      <div
        style={{
          scale: imgContainerScale.toString(),
        }}
        ref={imgContainerRef}
        className="h-[350px] w-[350px] overflow-hidden rounded-3xl"
      >
        <img
          style={{
            scale: imgScale.toString(),
          }}
          ref={imgRef}
          className="h-[350px] w-[350px] rounded-3xl object-cover"
          src={photo}
          alt={`Team member ${name}`}
        />
      </div>
      <p className="mt-6 text-lg text-outline-text">{descr}</p>
      <h3 className="mt-4 text-4xl">{name}</h3>
    </article>
  );
};

export default MemberCard;
