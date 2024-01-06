import { motion } from 'framer-motion';

import { figureAnimation, figureTransition, headingVariants, viewPort } from '@pages/WelcomePage/const/const';
import Card from '@pages/WelcomePage/ui/Card';
import { useLanguage } from '@shared/Context/hooks';

const WhatIsGraphiQl = () => {
  const { translation } = useLanguage();

  return (
    <section className="relative grid grid-cols-1 items-center justify-items-center gap-20">
      <motion.div
        animate={figureAnimation}
        transition={figureTransition}
        className="absolute -right-52 -top-24 z-0 h-[350px] w-[350px] rounded-full bg-gradient-to-br from-[#F97583] to-[#FFAB70] opacity-90 blur-[64px]"
      />

      <motion.h2
        viewport={viewPort}
        initial="offscreen"
        whileInView="onscreen"
        className="text-7.5xl font-light leading-h2"
        variants={headingVariants}
      >
        {translation.welcome.whatIsGraphiQL.title}
      </motion.h2>

      <motion.p
        viewport={viewPort}
        initial="offscreen"
        whileInView="onscreen"
        className="max-w-[520px] text-center text-outline-text"
        variants={headingVariants}
      >
        {translation.welcome.whatIsGraphiQL.subtitle}
      </motion.p>

      <ul className="grid grid-cols-3 grid-rows-2 gap-2">
        <li>
          <Card
            icon="public"
            title={translation.welcome.whatIsGraphiQL.cards[0].title}
            descr={translation.welcome.whatIsGraphiQL.cards[0].descr}
          />
        </li>

        <li>
          <Card
            icon="build_circle"
            title={translation.welcome.whatIsGraphiQL.cards[1].title}
            descr={translation.welcome.whatIsGraphiQL.cards[1].descr}
          />
        </li>

        <li>
          <Card
            icon="network_node"
            descr={translation.welcome.whatIsGraphiQL.cards[2].descr}
            title={translation.welcome.whatIsGraphiQL.cards[2].title}
          />
        </li>

        <li>
          <Card
            icon="library_books"
            title={translation.welcome.whatIsGraphiQL.cards[3].title}
            descr={translation.welcome.whatIsGraphiQL.cards[3].descr}
          />
        </li>

        <li>
          <Card
            icon="tab_duplicate"
            title={translation.welcome.whatIsGraphiQL.cards[4].title}
            descr={translation.welcome.whatIsGraphiQL.cards[4].descr}
          />
        </li>

        <li>
          <Card
            icon="aspect_ratio"
            title={translation.welcome.whatIsGraphiQL.cards[5].title}
            descr={translation.welcome.whatIsGraphiQL.cards[5].descr}
          />
        </li>
      </ul>
    </section>
  );
};

export default WhatIsGraphiQl;
