import Footer from '@components/Footer/Footer';
import AboutRsSchool from '@pages/WelcomePage/ui/AboutRsSchool';
import AppShowcase from '@pages/WelcomePage/ui/AppShowcase';
import Header from '@pages/WelcomePage/ui/Header';
import Hero from '@pages/WelcomePage/ui/Hero';
import StartUsingNow from '@pages/WelcomePage/ui/StartUsingNow';
import SubHeader from '@pages/WelcomePage/ui/SubHeader';
import TeamMembers from '@pages/WelcomePage/ui/TeamMembers';
import WhatIsGraphiQl from '@pages/WelcomePage/ui/WhatIsGraphiQL';
import { useLanguage } from '@shared/Context/hooks';
import cn from '@shared/lib/helpers/cn';

const WelcomePage = () => {
  const { language } = useLanguage();
  const isEng = language === 'en';

  return (
    <>
      <Header />
      <div
        className={cn(
          'm-auto max-w-[1200px] space-y-36 px-2 pb-16 font-readex_pro text-on-surface sm:px-0 lg:space-y-[350px]',
          {
            'font-roboto': !isEng,
          },
        )}
      >
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
