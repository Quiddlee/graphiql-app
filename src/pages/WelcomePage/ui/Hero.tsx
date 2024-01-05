import { motion } from 'framer-motion';

import { figureAnimation, figureTransition, headingVariants, viewPort } from '@pages/WelcomePage/const/const';

const Hero = () => {
  return (
    <section className="relative flex h-screen items-center justify-center">
      <motion.div
        animate={figureAnimation}
        transition={figureTransition}
        className="absolute -top-96 h-[800px] w-[800px] rounded-full bg-gradient-to-r from-[#F97583] to-[#381E72] blur-[200px] saturate-150"
      />

      <h1 className="isolate text-center text-10xl font-light leading-h1">
        <motion.span
          className="inline-block"
          viewport={viewPort}
          initial="offscreen"
          whileInView="onscreen"
          variants={headingVariants}
        >
          Welcome to
        </motion.span>{' '}
        <br />{' '}
        <motion.span
          className="inline-block"
          viewport={viewPort}
          initial="offscreen"
          whileInView="onscreen"
          variants={{
            ...headingVariants,
            onscreen: {
              ...headingVariants.onscreen,
              transition: { ...headingVariants.onscreen.transition, delay: 0.1 },
            },
          }}
        >
          the
        </motion.span>{' '}
        <motion.span
          viewport={viewPort}
          initial="offscreen"
          whileInView="onscreen"
          variants={{
            ...headingVariants,
            onscreen: {
              ...headingVariants.onscreen,
              transition: { ...headingVariants.onscreen.transition, delay: 0.2 },
            },
          }}
          className="inline-block bg-gradient-to-br from-[#F97583] to-[#381E72] bg-clip-text text-transparent"
        >
          GraphiQL
        </motion.span>
      </h1>
    </section>
  );
};

export default Hero;
