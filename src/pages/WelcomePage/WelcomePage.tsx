import bohdan from '@assets/Bohdan.jpg';
import appWelcome from '@assets/Desktop-welcome.png';
import harry from '@assets/Harry.jpg';
import oleksii from '@assets/Oleksii.jpg';
import Footer from '@components/Footer/Footer';
import Button from '@pages/WelcomePage/ui/Button';
import Card from '@pages/WelcomePage/ui/Card';
import Header from '@pages/WelcomePage/ui/Header';
import MemberCard from '@pages/WelcomePage/ui/MemberCard';

const WelcomePage = () => {
  return (
    <>
      <Header />
      <div className="m-auto max-w-[1200px] space-y-[350px] pb-16 font-readex_pro text-on-surface">
        <section className="flex h-screen items-center justify-center">
          <h1 className="text-center text-10xl font-light leading-h1">
            Welcome to <br /> the{' '}
            <span className="bg-gradient-to-br from-[#F97583] to-[#381E72] bg-clip-text text-transparent">
              GraphiQL
            </span>
          </h1>
        </section>

        <section className="text-center">
          <h2 className="text-[57px] font-light leading-[64px]">
            Craft stunning websites <br />
            with GraphQL superpowers. <br />
            Introducing GraphiQL,{' '}
            <span className="bg-gradient-to-br from-[#B69DF8] to-[#79B8FF] bg-clip-text font-medium text-transparent">
              {' '}
              your dream IDE.
            </span>
          </h2>
        </section>

        <section className="relative flex items-center justify-center">
          {/* <img */}
          {/*    className="absolute -top-10 left-6 max-w-[1000px] -rotate-[28deg] blur-[0.7px] brightness-75 transition-all duration-1000 ease-emphasized-accelerate peer-hover:rotate-0 peer-hover:duration-1000 peer-hover:ease-emphasized-decelerate" */}
          {/*    src={appWelcome} */}
          {/*    alt="App showcase" */}
          {/* /> */}
          {/* <img */}
          {/*    className="dpeer-hover:uration-1000 absolute -top-5 left-12 m-auto max-w-[1000px] -rotate-[18deg] blur-[0.5px] brightness-90 transition-all delay-100 duration-1000 ease-emphasized-accelerate peer-hover:rotate-0 peer-hover:ease-emphasized-decelerate" */}
          {/*    src={appWelcome} */}
          {/*    alt="App showcase" */}
          {/* /> */}
          {/* <img */}
          {/*    className="dpeer-hover:uration-1000 absolute -top-5 left-16 max-w-[1000px] -rotate-[10deg] brightness-95 transition-all delay-200 duration-1000 ease-emphasized-accelerate peer-hover:rotate-0 peer-hover:ease-emphasized-decelerate" */}
          {/*    src={appWelcome} */}
          {/*    alt="App showcase" */}
          {/* /> */}

          <img
            className="absolute -top-10 left-6 max-w-[1000px] -rotate-[28deg] blur-[0.7px] brightness-75 saturate-0"
            src={appWelcome}
            alt="App showcase"
          />
          <img
            className="absolute -top-5 left-12 m-auto max-w-[1000px] -rotate-[18deg] blur-[0.5px] brightness-90 saturate-50"
            src={appWelcome}
            alt="App showcase"
          />
          <img
            className="absolute -top-5 left-16 max-w-[1000px] -rotate-[10deg] brightness-95"
            src={appWelcome}
            alt="App showcase"
          />
          <img className="max-w-[1000px] brightness-125 saturate-150" src={appWelcome} alt="App showcase" />
        </section>

        <section className="grid grid-cols-1 items-center justify-items-center gap-20">
          <h2 className="text-7.5xl font-light leading-h2">What is GraphiQL?</h2>

          <p className="max-w-[520px] text-center text-outline-text">
            GraphiQL: Your interactive GraphQL IDE, empowering website development with syntax highlighting,
            autocompletion, and dynamic documentation.
          </p>

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

        <section className="grid grid-cols-1 items-center justify-center gap-[200px]">
          <h2 className="justify-self-center text-7.5xl font-light leading-h2">Meet our amazing team</h2>

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

        <section className="grid justify-items-center gap-20">
          <h2 className="text-center text-7.5xl font-light leading-h2">
            Built with the Support of The Rolling Scopes School
          </h2>

          <p className="max-w-[520px] text-center text-outline-text">
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
          </p>

          <iframe
            title="RS-Conf video"
            className="rounded-3xl"
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
            <Button>GraphiQL App</Button>
          </article>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default WelcomePage;
