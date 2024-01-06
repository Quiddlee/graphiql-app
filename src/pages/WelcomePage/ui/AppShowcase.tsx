import { useRef } from 'react';

import { motion, useMotionValueEvent, useScroll, useSpring } from 'framer-motion';

import appWelcome from '@assets/Desktop-welcome.png';
import { imgVariants, imgVievPort, scrollSpring } from '@pages/WelcomePage/const/const';

const SCALE_START = 0.9;
const SCALE_MULTIPLIER = 0.1;

const AppShowcase = () => {
  const mainImgRef = useRef<HTMLImageElement>(null);
  const imgSectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: imgSectionRef,
    offset: ['start end', 'end end'],
  });

  const springValue = useSpring(scrollYProgress, scrollSpring);
  useMotionValueEvent(springValue, 'change', (latest) => {
    if (mainImgRef.current) mainImgRef.current.style.scale = `${SCALE_START + latest * SCALE_MULTIPLIER}`;
  });

  return (
    <section ref={imgSectionRef} className="relative flex items-center justify-center">
      <div className="absolute -top-24 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[#B69DF8] to-[#79B8FF] blur-[200px] saturate-150 md:h-[600px] md:w-[600px] lg:h-[1000px] lg:w-[1000px]" />

      <motion.img
        variants={{
          ...imgVariants,
          onscreen: {
            ...imgVariants.onscreen,
            rotate: -28,
          },
        }}
        viewport={imgVievPort}
        initial="offscreen"
        whileInView="onscreen"
        className="absolute -top-10 left-6 w-5/6 -rotate-[28deg] blur-[0.7px] brightness-75 saturate-0"
        src={appWelcome}
        alt="App showcase"
      />
      <motion.img
        variants={{
          ...imgVariants,
          onscreen: {
            ...imgVariants.onscreen,
            rotate: -18,
          },
        }}
        initial="offscreen"
        whileInView="onscreen"
        viewport={imgVievPort}
        className="absolute -top-5 left-12 m-auto w-5/6 -rotate-[18deg] blur-[0.5px] brightness-90 saturate-50"
        src={appWelcome}
        alt="App showcase"
      />
      <motion.img
        variants={{
          ...imgVariants,
          onscreen: {
            ...imgVariants.onscreen,
            rotate: -10,
          },
        }}
        initial="offscreen"
        whileInView="onscreen"
        viewport={imgVievPort}
        className="absolute -top-5 left-16 w-5/6 -rotate-[10deg] brightness-95"
        src={appWelcome}
        alt="App showcase"
      />
      <img ref={mainImgRef} className="w-5/6 brightness-125 saturate-150" src={appWelcome} alt="App showcase" />
    </section>
  );
};

export default AppShowcase;
