import { FC, ReactNode, useRef } from 'react';

import { useMotionValueEvent, useScroll } from 'framer-motion';

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

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (!imgContainerRef.current || !imgRef.current) return;

    const latestScaleValue = SCALE_START + latest * SCALE_MULTIPLIER;
    const inverseScaleValue = 1 / latestScaleValue;

    imgContainerRef.current.style.scale = String(latestScaleValue);
    imgRef.current.style.scale = String(inverseScaleValue);
  });

  return (
    <article ref={cardRef} className={cn(className)}>
      <div
        style={{
          scale: 0.8,
        }}
        ref={imgContainerRef}
        className="h-[400px] w-[400px] overflow-hidden rounded-3xl transition-all duration-1000 ease-out"
      >
        <img
          style={{
            scale: 1.25,
          }}
          ref={imgRef}
          className="h-[400px] w-[400px] rounded-3xl object-cover transition-all duration-1000 ease-out"
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
