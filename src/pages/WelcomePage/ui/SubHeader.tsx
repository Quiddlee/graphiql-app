import { motion } from 'framer-motion';

import { headingVariants, viewPort } from '@pages/WelcomePage/const/const';
import { useLanguage } from '@shared/Context/hooks';

const SubHeader = () => {
  const { translation } = useLanguage();

  return (
    <section className="text-center">
      <h2 className="text-2xl font-light sm:text-3xl md:text-4xl lg:text-6xl xl:text-[57px] xl:leading-[64px]">
        <motion.span
          className="inline-block"
          viewport={viewPort}
          initial="offscreen"
          whileInView="onscreen"
          variants={headingVariants}
        >
          {translation.welcome.subHeader.title.craft}
        </motion.span>{' '}
        <br />
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
          {translation.welcome.subHeader.title.superpowers}
        </motion.span>
        <br />
        <motion.span
          className="inline-block"
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
        >
          {translation.welcome.subHeader.title.introducing}
        </motion.span>{' '}
        <motion.span
          className="inline-block bg-gradient-to-br from-[#B69DF8] to-[#79B8FF] bg-clip-text font-medium text-transparent"
          viewport={viewPort}
          initial="offscreen"
          whileInView="onscreen"
          variants={{
            ...headingVariants,
            onscreen: {
              ...headingVariants.onscreen,
              transition: { ...headingVariants.onscreen.transition, delay: 0.5 },
            },
          }}
        >
          {translation.welcome.subHeader.title.dream}
        </motion.span>
      </h2>
    </section>
  );
};

export default SubHeader;
