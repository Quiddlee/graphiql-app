import Footer from '@components/Footer/Footer';
import AboutRsSchool from '@pages/WelcomePage/ui/AboutRsSchool';
import AppShowcase from '@pages/WelcomePage/ui/AppShowcase';
import Header from '@pages/WelcomePage/ui/Header';
import Hero from '@pages/WelcomePage/ui/Hero';
import StartUsingNow from '@pages/WelcomePage/ui/StartUsingNow';
import SubHeader from '@pages/WelcomePage/ui/SubHeader';
import TeamMembers from '@pages/WelcomePage/ui/TeamMembers';
import WhatIsGraphiQl from '@pages/WelcomePage/ui/WhatIsGraphiQL';

const WelcomePage = () => {
  return (
    <>
      <Header />
      <div className="m-auto max-w-[1200px] space-y-[350px] pb-16 font-readex_pro text-on-surface">
        <Hero />
        <SubHeader />
        <AppShowcase />
        <WhatIsGraphiQl />
        <TeamMembers />
        <AboutRsSchool />
        <StartUsingNow />
        <Footer />
      </div>
    </>
  );
};

export default WelcomePage;
