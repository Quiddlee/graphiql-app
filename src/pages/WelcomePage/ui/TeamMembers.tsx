import { motion } from 'framer-motion';

import bohdan from '@assets/Bohdan.jpg';
import harry from '@assets/Harry.jpg';
import oleksii from '@assets/Oleksii.jpg';
import { figureAnimation, figureTransition, headingVariants, viewPort } from '@pages/WelcomePage/const/const';
import MemberCard from '@pages/WelcomePage/ui/MemberCard';

const TeamMembers = () => {
  return (
    <section className="relative grid grid-cols-1 items-center justify-center gap-[200px]">
      <motion.div
        animate={figureAnimation}
        transition={figureTransition}
        className="absolute inset-0 top-40 -z-10 m-auto h-[1100px] w-[1100px] rounded-full bg-gradient-to-br from-[#381E72] to-[#79B8FF] opacity-25 blur-[64px]"
      />
      <motion.h2
        viewport={viewPort}
        initial="offscreen"
        whileInView="onscreen"
        className="justify-self-center text-7.5xl font-light leading-h2"
        variants={headingVariants}
      >
        Meet our amazing team
      </motion.h2>

      <ul className="grid grid-cols-[1fr_2fr] grid-rows-2 justify-self-start">
        <li className="col-start-2 col-end-3 justify-self-end">
          <MemberCard
            photo={bohdan}
            name="Bohdan Shcherbyna"
            descr={
              <span>
                Front-end <br /> UI/UX Design
              </span>
            }
          />
        </li>

        <li className="col-start-1 col-end-2 row-start-1 row-end-3 mt-[189px]">
          <MemberCard
            photo={oleksii}
            name="Oleksii Drohachov"
            descr={
              <span>
                Front-end <br /> Back-end
              </span>
            }
          />
        </li>

        <li className="col-start-2 col-end-3 row-start-2 row-end-3 ml-9 mt-28">
          <MemberCard photo={harry} name="Harry Holubiev" descr="Front-end" />
        </li>
      </ul>
    </section>
  );
};

export default TeamMembers;
