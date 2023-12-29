import NavItem from '@components/Nav/ui/NavItem';
import VirtualScroll from '@components/Nav/ui/VirtualScroll';
import AddView from '@components/ViewList/ui/AddView';
import Details from '@components/ViewList/ui/Details';
import ViewItem from '@components/ViewList/ui/ViewItem';
import ViewList from '@components/ViewList/ViewList';
import ROUTES from '@shared/constants/routes';
import useLanguage from '@shared/Context/hooks';
import Fab from '@shared/ui/Fab';
import Icon from '@shared/ui/Icon';
import IconButton from '@shared/ui/IconButton';

const NavigationDrawer = () => {
  const { translation } = useLanguage();

  return (
    <article className="h-fit w-full overflow-hidden text-on-surface-variant-text lg:overflow-auto">
      <ul className="mb-11 grid justify-items-center gap-2 lg:hidden">
        <IconButton>
          <Icon>menu</Icon>
        </IconButton>
        <Fab variant="tertiary">
          <Icon slot="icon">play_arrow</Icon>
        </Fab>
      </ul>

      <ul className="grid gap-4 lg:block">
        <NavItem data-testid="nav-welcome" to={ROUTES.WELCOME_PAGE}>
          <div className="grid justify-items-center gap-2">
            <Icon>spa</Icon>
            <span className="block text-sm lg:hidden">{translation.nav.navbar.welcome}</span>
          </div>
          <span className="hidden lg:block">{translation.nav.navbar.welcome}</span>
        </NavItem>

        <NavItem data-testid="nav-settings" to={ROUTES.SETTINGS}>
          <div className="grid justify-items-center gap-2">
            <Icon>settings</Icon>
            <span className="block text-sm lg:hidden">{translation.nav.navbar.settings}</span>
          </div>
          <span className="hidden lg:block">{translation.nav.navbar.settings}</span>
        </NavItem>

        <hr className="invisible ml-4 border-outline-variant lg:visible" />
      </ul>
      <ViewList
        render={(view) => (
          <ViewItem key={view.id} id={view.id}>
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
  );
};

export default NavigationDrawer;
