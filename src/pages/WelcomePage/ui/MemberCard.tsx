import { FC, ReactNode, useRef, useState } from 'react';

import { useMotionValueEvent, useScroll, useSpring } from 'framer-motion';

import { scrollSpring } from '@pages/WelcomePage/const/const';

type MemberCardProps = {
  photo: string;
  name: string;
  descr: string | ReactNode;
};

const SCALE_START = 0.8;
const SCALE_MULTIPLIER = 0.3;

const MemberCard: FC<MemberCardProps> = ({ photo, name, descr }) => {
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
    <article ref={cardRef} className="relative">
      <div
        style={{
          scale: imgContainerScale.toString(),
        }}
        ref={imgContainerRef}
        className="h-[350px] w-full max-w-[350px] overflow-hidden rounded-3xl sm:w-[350px]"
      >
        <img
          style={{
            scale: imgScale.toString(),
          }}
          ref={imgRef}
          className="h-[inherit] w-[inherit] rounded-3xl object-cover"
          src={photo}
          alt={`Team member ${name}`}
        />
      </div>
      <p className="mt-6 text-outline-text lg:text-lg">{descr}</p>
      <h3 className="mt-4 text-2xl lg:text-4xl">{name}</h3>
    </article>
  );
};

export default MemberCard;
