import { motion } from 'framer-motion';

import { figureAnimation, figureTransition, headingVariants, viewPort } from '@pages/WelcomePage/const/const';
import { useLanguage } from '@shared/Context/hooks';

const Hero = () => {
  const { translation } = useLanguage();

  return (
    <section className="relative flex h-screen items-center justify-center">
      <motion.div
        animate={figureAnimation}
        transition={figureTransition}
        className="absolute -top-1/2 h-96 w-96 rounded-full bg-gradient-to-r from-[#F97583] to-[#381E72] blur-[100px] saturate-150 md:h-[400px] md:w-[400px] lg:h-[600px] lg:w-[600px] xl:-top-96 xl:h-[800px] xl:w-[800px]"
      />

      <h1 className="isolate text-center text-5xl font-light sm:text-6xl md:text-8xl lg:text-9xl xl:text-10xl xl:leading-h1">
        <motion.span
          className="inline-block"
          viewport={viewPort}
          initial="offscreen"
          whileInView="onscreen"
          variants={headingVariants}
        >
          {translation.welcome.hero.title.welcomeTo}
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
          {translation.welcome.hero.title.the}
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
          {translation.welcome.hero.title.graphiql}
        </motion.span>
      </h1>
    </section>
  );
};

export default Hero;
