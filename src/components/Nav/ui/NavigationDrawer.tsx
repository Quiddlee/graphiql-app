import { useCallback, useEffect, useState } from 'react';

import { flushSync } from 'react-dom';

import NavItem from '@components/Nav/ui/NavItem';
import VirtualScroll from '@components/Nav/ui/VirtualScroll';
import AddView from '@components/ViewList/ui/AddView';
import Details from '@components/ViewList/ui/Details';
import ViewItem from '@components/ViewList/ui/ViewItem';
import ViewList from '@components/ViewList/ViewList';
import ROUTES from '@shared/constants/routes';
import useLanguage from '@shared/Context/hooks';
import cn from '@shared/lib/helpers/cn';
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

  useEffect(() => {
    if (isDesktop) {
      setIsActive(false);
    }
  }, [isDesktop]);

  const handleHideDrawer = useCallback(
    function handleHideDrawer() {
      if (isDesktop || !isActive) return;

      if (!document.startViewTransition) {
        setIsActive(false);
        return;
      }

      document.startViewTransition(() => {
        flushSync(() => {
          setIsActive(false);
        });
      });
    },
    [isActive, isDesktop],
  );

  const handleShowDrawer = useCallback(
    function handleShowDrawer() {
      if (isDesktop) return;

      if (!document.startViewTransition) {
        setIsActive(true);
        return;
      }

      document.startViewTransition(() => {
        flushSync(() => {
          setIsActive(true);
        });
      });
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
          <IconButton onClick={handleShowDrawer}>
            <Icon>menu</Icon>
          </IconButton>
          <Fab variant="tertiary">
            <Icon slot="icon">play_arrow</Icon>
          </Fab>
        </ul>

        <ul
          className={cn('grid w-20 gap-4 lg:block lg:w-full', {
            'w-full': isActive,
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
      </article>
    </>
  );
};

export default NavigationDrawer;
