import { motion } from 'framer-motion';

import bohdan from '@assets/Bohdan.jpg';
import harry from '@assets/Harry.jpg';
import oleksii from '@assets/Oleksii.jpg';
import { figureAnimation, figureTransition, headingVariants, viewPort } from '@pages/WelcomePage/const/const';
import MemberCard from '@pages/WelcomePage/ui/MemberCard';
import { useLanguage } from '@shared/Context/hooks';
import useScreen from '@shared/lib/hooks/useScreen';

const TeamMembers = () => {
  const { translation } = useLanguage();
  const screenType = useScreen();

  const isTouch = screenType === 'mobile' || screenType === 'tablet';
  const animation = isTouch ? {} : figureAnimation;

  return (
    <section className="relative grid grid-cols-1 items-center justify-center gap-14 sm:gap-[200px]">
      <motion.div
        animate={animation}
        transition={figureTransition}
        className="absolute inset-0 z-0 m-auto h-full w-full rounded-full bg-gradient-to-br from-[#381E72] to-[#79B8FF] opacity-25 blur-[64px] xl:top-40 xl:h-[1100px] xl:w-[1100px]"
      />

      <motion.h2
        viewport={viewPort}
        initial="offscreen"
        whileInView="onscreen"
        className="justify-self-center text-center text-4xl font-light sm:text-6xl lg:text-7.5xl lg:leading-h2"
        variants={headingVariants}
      >
        {translation.welcome.team.title}
      </motion.h2>

      <ul className="grid justify-items-center gap-20 px-6 md:grid-cols-[1fr_2fr] md:grid-rows-2 md:justify-items-stretch md:justify-self-start lg:gap-20">
        <li className="md:col-start-2 md:col-end-3 md:justify-self-end">
          <MemberCard
            photo={bohdan}
            name={translation.welcome.team.bohdan.name}
            descr={
              <span>
                Front-end <br /> UI/UX {translation.welcome.team.bohdan.design}
              </span>
            }
          />
        </li>

        <li className="md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 md:mt-[189px]">
          <MemberCard
            photo={oleksii}
            name={translation.welcome.team.oleksii.name}
            descr={
              <span>
                Front-end <br /> Back-end
              </span>
            }
          />
        </li>

        <li className="md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 md:ml-9 md:mt-28">
          <MemberCard photo={harry} name={translation.welcome.team.harry.name} descr="Front-end" />
        </li>
      </ul>
    </section>
  );
};

export default TeamMembers;
