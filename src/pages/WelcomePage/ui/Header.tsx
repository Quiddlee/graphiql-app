import { useState } from 'react';

import { useMotionValueEvent, useScroll, useSpring } from 'framer-motion';

import AnimatedLink from '@pages/WelcomePage/ui/AnimatedLink';
import Button from '@pages/WelcomePage/ui/Button';
import ROUTES from '@shared/constants/routes';
import useAuth from '@shared/Context/authHook';
import { useLanguage } from '@shared/Context/hooks';
import viewTransition from '@shared/lib/helpers/viewTransition';
import FilledButton from '@shared/ui/FilledButton';
import Icon from '@shared/ui/Icon';
import IconButton from '@shared/ui/IconButton';
import OutlinedButton from '@shared/ui/OutlinedButton';
import TextButton from '@shared/ui/TextButton';

const SPRING_DURATION = 1000;
const HEADER_HEIGHT = 80;
const SCROLL_VALUE_MAX = 1;
const PADDING = 16;

const Header = () => {
  const { changeLanguage, language } = useLanguage();
  const { isAuth, logOut } = useAuth();
  const { translation } = useLanguage();

  const [scrollValue, setScrollValue] = useState(0);
  const { scrollYProgress } = useScroll();
  const springValue = useSpring(scrollYProgress, {
    duration: SPRING_DURATION,
  });
  useMotionValueEvent(springValue, 'change', (progress) => {
    const headerValue = progress * HEADER_HEIGHT;
    if (headerValue <= SCROLL_VALUE_MAX) setScrollValue(headerValue);
    else if (headerValue >= SCROLL_VALUE_MAX && scrollValue !== SCROLL_VALUE_MAX) setScrollValue(SCROLL_VALUE_MAX);
  });

  const lang = language === 'en' ? 'Rus' : 'Eng';
  const logoScale = 1.5 - scrollValue / 2;
  const translate = scrollValue * -PADDING;

  return (
    <header className="sticky left-0 top-0 z-50 flex h-20 w-full items-center px-4 text-on-surface">
      <span
        style={{
          viewTransitionName: 'title',
          scale: String(logoScale),
          transform: `translateX(${translate}%)`,
        }}
        className="ml-4 font-readex_pro text-sm"
      >
        GraphiQL
      </span>
      <article className="ml-auto flex items-center gap-3">
        <TextButton
          style={{
            viewTransitionName: 'language-switch',
          }}
          onClick={() => viewTransition(() => changeLanguage())}
        >
          {lang}
        </TextButton>
        {isAuth ? (
          <>
            <IconButton onClick={() => logOut()}>
              <Icon>door_open</Icon>
            </IconButton>
            <AnimatedLink to={`${ROUTES.MAIN}`}>
              <Button className="h-[60px] w-[160px] text-sm">{translation.welcome.start.buttonApp}</Button>
            </AnimatedLink>
          </>
        ) : (
          <>
            <AnimatedLink
              style={{
                viewTransitionName: 'login',
              }}
              to={`${ROUTES.AUTH}/${ROUTES.LOGIN}`}
            >
              <OutlinedButton>{translation.loginPage.btnTitle}</OutlinedButton>
            </AnimatedLink>
            <AnimatedLink
              style={{
                viewTransitionName: 'sign up',
              }}
              to={`${ROUTES.AUTH}/${ROUTES.SIGNUP}`}
            >
              <FilledButton>{translation.welcome.start.buttonAuth}</FilledButton>
            </AnimatedLink>
          </>
        )}
      </article>
    </header>
  );
};

export default Header;
