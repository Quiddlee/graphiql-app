import NavItem from '@components/Nav/ui/NavItem';
import ROUTES from '@shared/constants/routes';
import useLanguage from '@shared/Context/hooks';
import cn from '@shared/lib/helpers/cn';
import Icon from '@shared/ui/Icon';

const NavigationBar = () => {
  const { translation } = useLanguage();

  return (
    <ul className={cn('flex h-full w-full items-center justify-around gap-4 lg:block lg:w-full')}>
      <NavItem className="min-w-[60px]" data-testid="nav-welcome" to={ROUTES.WELCOME_PAGE}>
        <div className="grid justify-items-center gap-2">
          <Icon>spa</Icon>
          <span className={cn('block text-sm lg:hidden')}>{translation.nav.navbar.welcome}</span>
        </div>
      </NavItem>

      <NavItem className="min-w-[60px]" data-testid="nav-settings" to={ROUTES.SETTINGS}>
        <div className="grid justify-items-center gap-2">
          <Icon>settings</Icon>
          <span className={cn('block text-sm lg:hidden')}>{translation.nav.navbar.settings}</span>
        </div>
      </NavItem>
    </ul>
  );
};

export default NavigationBar;
