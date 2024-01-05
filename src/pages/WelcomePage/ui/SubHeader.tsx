import { motion } from 'framer-motion';

import { headingVariants, viewPort } from '@pages/WelcomePage/const/const';

const SubHeader = () => {
  return (
    <section className="text-center">
      <h2 className="text-[57px] font-light leading-[64px]">
        <motion.span
          className="inline-block"
          viewport={viewPort}
          initial="offscreen"
          whileInView="onscreen"
          variants={headingVariants}
        >
          Craft stunning websites
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
          with GraphQL superpowers.
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
          Introducing GraphiQL,
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
          your dream IDE.
        </motion.span>
      </h2>
    </section>
  );
};

export default SubHeader;
