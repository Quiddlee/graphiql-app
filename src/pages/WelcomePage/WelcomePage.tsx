import { useRef } from 'react';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import bohdan from '@assets/Bohdan.jpg';
import appWelcome from '@assets/Desktop-welcome.png';
import harry from '@assets/Harry.jpg';
import oleksii from '@assets/Oleksii.jpg';
import Footer from '@components/Footer/Footer';
import Button from '@pages/WelcomePage/ui/Button';
import Card from '@pages/WelcomePage/ui/Card';
import Header from '@pages/WelcomePage/ui/Header';
import MemberCard from '@pages/WelcomePage/ui/MemberCard';
import ROUTES from '@shared/constants/routes';

const headingVariants = {
  offscreen: {
    y: '100%',
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1.2,
    },
  },
};

const figureAnimation = {
  scale: [1, 1.1, 1],
  rotate: [0, 30, 0],
  skew: [0, 2, 0],
};

const figureTransition = {
  duration: 10,
  ease: 'easeInOut',
  times: [0, 0.2, 0.5, 0.8, 1],
  repeat: Infinity,
  repeatDelay: 1,
};

const viewPort = { once: true };

const imgVariants = {
  offscreen: {
    rotate: 0,
    opacity: 0,
  },
  onscreen: {
    rotate: 10,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1,
    },
  },
};

const imgVievPort = { margin: '-300px' };

const WelcomePage = () => {
  const navigate = useNavigate();

  const mainImgRef = useRef<HTMLImageElement>(null);
  const imgSectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: imgSectionRef,
    offset: ['start end', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (mainImgRef.current) mainImgRef.current.style.scale = `${0.9 + latest * 0.1}`;
  });

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const iframeSectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress: scrollIframe } = useScroll({
    target: iframeSectionRef,
    offset: ['start end', 'end end'],
  });

  useMotionValueEvent(scrollIframe, 'change', (latest) => {
    if (iframeRef.current) iframeRef.current.style.scale = `${0.8 + latest * 0.1}`;
  });

  return (
    <>
      <Header />
      <div className="m-auto max-w-[1200px] space-y-[500px] pb-16 font-readex_pro text-on-surface">
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

        <section ref={imgSectionRef} className="relative flex items-center justify-center">
          <div className="absolute -top-52 h-[1000px] w-[1000px] rounded-full bg-gradient-to-br from-[#B69DF8] to-[#79B8FF] blur-[200px] saturate-150" />

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
            className="absolute -top-10 left-6 max-w-[1000px] -rotate-[28deg] blur-[0.7px] brightness-75 saturate-0"
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
            className="absolute -top-5 left-12 m-auto max-w-[1000px] -rotate-[18deg] blur-[0.5px] brightness-90 saturate-50"
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
            className="absolute -top-5 left-16 max-w-[1000px] -rotate-[10deg] brightness-95"
            src={appWelcome}
            alt="App showcase"
          />
          <img
            ref={mainImgRef}
            className="max-w-[1000px] brightness-125 saturate-150 transition-all duration-500 ease-out"
            src={appWelcome}
            alt="App showcase"
          />
        </section>

        <section className="relative grid grid-cols-1 items-center justify-items-center gap-20">
          <motion.div
            animate={figureAnimation}
            transition={figureTransition}
            className="absolute -right-52 -top-52 -z-10 h-[450px] w-[450px] rounded-full bg-gradient-to-br from-[#F97583] to-[#FFAB70] opacity-90 blur-[64px]"
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
            GraphiQL: Your interactive GraphQL IDE, empowering website development with syntax highlighting,
            autocompletion, and dynamic documentation.
          </motion.p>

          <ul className="grid grid-cols-3 grid-rows-2 gap-2">
            <li>
              <Card
                icon="public"
                title="Multi language support"
                descr="Support up to 2 languges — English and Russian."
              />
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
                descr="Your latest queries are automatically saved. You can create different views."
              />
            </li>

            <li>
              <Card icon="aspect_ratio" title="Editor resizing" descr="Change the editor size based on your needs." />
            </li>
          </ul>
        </section>

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

        <section ref={iframeSectionRef} className="relative grid justify-items-center gap-20">
          <motion.div
            animate={figureAnimation}
            transition={figureTransition}
            className="absolute -left-64 -top-72 -z-10 h-[450px] w-[450px] rounded-full bg-gradient-to-br from-[#F02FC2] to-[#F38181] opacity-90 blur-[64px]"
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
            , a leading provider of <br /> free-of-charge community-based <br /> education programs. <br /> And built as
            a graduation project for <br /> the{' '}
            <a className="underline" href="https://rs.school/react/" target="_blank" rel="noreferrer">
              React course
            </a>
            .
          </motion.p>

          <iframe
            ref={iframeRef}
            title="RS-Conf video"
            className="inline-block rounded-3xl transition-all duration-1000 ease-out"
            style={{ border: 'none' }}
            width="1200"
            height="675"
            frameBorder="0"
            src="https://www.youtube.com/embed/ySaK-AkZojk?autoplay=1&mute=1&controls=0&modestbranding=1"
          />
        </section>

        <section>
          <article className="grid h-[480px] w-full grid-cols-1 items-center justify-center justify-items-center rounded-full bg-gradient-to-br from-[#F97583] to-[#381E72] p-20">
            <h2 className="text-center text-7.5xl font-light leading-h2">
              Start Using <br /> GraphiQL Now
            </h2>
            <Button
              onClick={() => {
                navigate(ROUTES.MAIN);
              }}
            >
              GraphiQL App
            </Button>
          </article>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default WelcomePage;
