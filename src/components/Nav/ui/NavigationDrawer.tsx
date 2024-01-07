import { useCallback, useEffect, useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import NavItem from '@components/Nav/ui/NavItem';
import VirtualScroll from '@components/Nav/ui/VirtualScroll';
import AddView from '@components/ViewList/ui/AddView';
import Details from '@components/ViewList/ui/Details';
import ViewItem from '@components/ViewList/ui/ViewItem';
import ViewList from '@components/ViewList/ViewList';
import ROUTES from '@shared/constants/routes';
import { useLanguage } from '@shared/Context/hooks';
import cn from '@shared/lib/helpers/cn';
import viewTransition from '@shared/lib/helpers/viewTransition';
import useScreen from '@shared/lib/hooks/useScreen';
import Blackout from '@shared/ui/Blackout';
import Fab from '@shared/ui/Fab';
import Icon from '@shared/ui/Icon';
import IconButton from '@shared/ui/IconButton';

const NavigationDrawer = () => {
  const { translation } = useLanguage();
  const screenType = useScreen();
  const [isActive, setIsActive] = useState(false);

  const isDesktop = screenType === 'desktop';
  const isMobile = screenType === 'mobile';

  useEffect(() => {
    if (isDesktop && isActive) {
      setIsActive(false);
    }
  }, [isActive, isDesktop]);

  const handleHideDrawer = useCallback(
    function handleHideDrawer() {
      if (!isDesktop && isActive) viewTransition(() => setIsActive(false));
    },
    [isActive, isDesktop],
  );

  const handleShowDrawer = useCallback(
    function handleShowDrawer() {
      if (!isDesktop) viewTransition(() => setIsActive(true));
    },
    [isDesktop],
  );

  return (
    <>
      <Blackout isBlackout={isActive} unlock={handleHideDrawer} />

      <article
        className={cn(
          'h-full w-20 overflow-hidden text-on-surface-variant-text transition-all duration-400 ease-emphasized-decelerate lg:relative lg:block lg:h-full lg:w-full lg:translate-y-0',
          {
            'absolute left-0 top-0 z-40 h-screen w-[384px] translate-y-0 overflow-auto rounded-r-3xl bg-surface-container p-3 duration-700':
              isActive,
            'absolute left-0 top-0 w-[90%] max-w-[384px] origin-left scale-x-50': isMobile,
            'z-40 scale-x-100': isMobile && isActive,
          },
        )}
      >
        <h2
          className={cn('py-[18px] pl-4 pr-2 font-readex_pro text-on-surface-text', {
            hidden: !isActive,
          })}
        >
          GraphiQL
        </h2>

        <ul
          className={cn('mb-11 grid w-20 justify-items-center gap-2 lg:hidden', {
            hidden: isActive,
          })}
        >
          <IconButton
            className={cn({
              'ml-2 mt-3 scale-x-[2]': isMobile,
            })}
            onClick={handleShowDrawer}
          >
            <Icon>menu</Icon>
          </IconButton>
          <Fab
            className={cn({
              hidden: isMobile,
            })}
            variant="tertiary"
          >
            <Icon slot="icon">play_arrow</Icon>
          </Fab>
        </ul>

        <ul
          className={cn('grid w-20 justify-center gap-4 lg:block lg:w-full lg:justify-start', {
            'w-full justify-stretch': isActive,
            hidden: isMobile,
          })}
        >
          <NavItem
            onClick={handleHideDrawer}
            style={{
              viewTransitionName: 'nav-welcome',
            }}
            isExpand={isActive}
            data-testid="nav-welcome"
            to={ROUTES.WELCOME_PAGE}
          >
            <div className="grid justify-items-center gap-2">
              <Icon>spa</Icon>
              <span
                className={cn('block text-sm lg:hidden', {
                  hidden: isActive,
                })}
              >
                {translation.nav.navbar.welcome}
              </span>
            </div>
            <span
              className={cn('hidden lg:block', {
                block: isActive,
              })}
            >
              {translation.nav.navbar.welcome}
            </span>
          </NavItem>

          <NavItem
            onClick={handleHideDrawer}
            style={{
              viewTransitionName: 'nav-settings',
            }}
            isExpand={isActive}
            data-testid="nav-settings"
            to={ROUTES.SETTINGS}
          >
            <div className="grid justify-items-center gap-2">
              <Icon>settings</Icon>
              <span
                className={cn('block text-sm lg:hidden', {
                  hidden: isActive,
                })}
              >
                {translation.nav.navbar.settings}
              </span>
            </div>
            <span
              className={cn('hidden lg:block', {
                block: isActive,
              })}
            >
              {translation.nav.navbar.settings}
            </span>
          </NavItem>

          <hr className="invisible ml-4 border-outline-variant lg:visible" />
        </ul>
        <AnimatePresence>
          <ViewList
            isActive={isActive}
            render={(view) => (
              <ViewItem onClick={handleHideDrawer} key={view.id} id={view.id}>
                <span className="animation-delay-200 flex animate-fade-in-standard items-center">
                  <Icon>tab</Icon>
                </span>
                <span className="truncate group-hover:pe-8 [&:has(+_article_.visible)]:pe-8">{view.name}</span>
                <Details id={view.id} />
              </ViewItem>
            )}
          >
            <AddView />
            <VirtualScroll size="7" />
          </ViewList>
        </AnimatePresence>
      </article>
    </>
  );
};

export default NavigationDrawer;
