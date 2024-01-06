import { motion } from 'framer-motion';

import { figureAnimation, figureTransition, headingVariants, viewPort } from '@pages/WelcomePage/const/const';
import Card from '@pages/WelcomePage/ui/Card';

const WhatIsGraphiQl = () => {
  return (
    <section className="relative grid grid-cols-1 items-center justify-items-center gap-20">
      <motion.div
        animate={figureAnimation}
        transition={figureTransition}
        className="absolute -top-24 right-0 -z-10 h-[250px] w-[250px] rounded-full bg-gradient-to-br from-[#F97583] to-[#FFAB70] opacity-90 blur-[64px]"
      />

      <motion.h2
        viewport={viewPort}
        initial="offscreen"
        whileInView="onscreen"
        className="text-7.5xl font-light leading-h2"
        variants={headingVariants}
      >
        What is GraphiQL?
      </motion.h2>

      <motion.p
        viewport={viewPort}
        initial="offscreen"
        whileInView="onscreen"
        className="max-w-[520px] text-center text-outline-text"
        variants={headingVariants}
      >
        GraphiQL: Your interactive GraphQL IDE, empowering website development with syntax highlighting, autocompletion,
        and dynamic documentation.
      </motion.p>

      <ul className="grid grid-cols-3 grid-rows-2 gap-2">
        <li>
          <Card icon="public" title="Multi language support" descr="Support up to 2 languges — English and Russian." />
        </li>

        <li>
          <Card
            icon="build_circle"
            title="Query prettifiying"
            descr="Allow you to prettify the query you wrote and to focus more on real things."
          />
        </li>

        <li>
          <Card
            icon="network_node"
            title="Choose your endpoint"
            descr="Support for choosing the user specified endpoint."
          />
        </li>

        <li>
          <Card
            icon="library_books"
            title="Dynamic documentation"
            descr="GraphiQL updates the documentation schema dynamically."
          />
        </li>

        <li>
          <Card
            icon="tab_duplicate"
            title="Save your’e queries"
            descr="Your latest queries and views are automatically saved."
          />
        </li>

        <li>
          <Card icon="aspect_ratio" title="Editor resizing" descr="Change the editor size based on your needs." />
        </li>
      </ul>
    </section>
  );
};

export default WhatIsGraphiQl;
