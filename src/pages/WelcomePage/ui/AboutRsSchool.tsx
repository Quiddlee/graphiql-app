import { useRef } from 'react';

import { motion, useMotionValueEvent, useScroll, useSpring } from 'framer-motion';

import {
  figureAnimation,
  figureTransition,
  headingVariants,
  scrollSpring,
  viewPort,
} from '@pages/WelcomePage/const/const';

const AboutRsSchool = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const iframeSectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: iframeSectionRef,
    offset: ['start end', 'end end'],
  });

  const springValue = useSpring(scrollYProgress, scrollSpring);
  useMotionValueEvent(springValue, 'change', (latest) => {
    if (iframeRef.current) iframeRef.current.style.scale = `${0.8 + latest * 0.1}`;
  });

  return (
    <section ref={iframeSectionRef} className="relative grid justify-items-center gap-20">
      <motion.div
        animate={figureAnimation}
        transition={figureTransition}
        className="absolute -top-64 left-0 -z-10 h-[250px] w-[250px] rounded-full bg-gradient-to-br from-[#F02FC2] to-[#F38181] opacity-90 blur-[64px]"
      />

      <motion.h2
        className="inline-block text-center text-7.5xl font-light leading-h2"
        viewport={viewPort}
        initial="offscreen"
        whileInView="onscreen"
        variants={headingVariants}
      >
        Built with the Support of The Rolling Scopes School
      </motion.h2>

      <motion.p
        className="max-w-[520px] text-center text-outline-text"
        viewport={viewPort}
        initial="offscreen"
        whileInView="onscreen"
        variants={headingVariants}
      >
        We proud to announce that it is supported by <br /> the{' '}
        <a className="underline" href="https://rs.school/" target="_blank" rel="noreferrer">
          RS School
        </a>
        , a leading provider of <br /> free-of-charge community-based <br /> education programs. <br /> And built as a
        graduation project for <br /> the{' '}
        <a className="underline" href="https://rs.school/react/" target="_blank" rel="noreferrer">
          React course
        </a>
        .
      </motion.p>

      <iframe
        ref={iframeRef}
        title="RS-Conf video"
        className="inline-block rounded-3xl"
        style={{ border: 'none' }}
        width="1200"
        height="675"
        frameBorder="0"
        src="https://www.youtube.com/embed/ySaK-AkZojk?autoplay=1&mute=1&controls=0&modestbranding=1"
      />
    </section>
  );
};

export default AboutRsSchool;
