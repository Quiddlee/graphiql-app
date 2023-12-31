import NavItem from '@components/Nav/ui/NavItem';
import VirtualScroll from '@components/Nav/ui/VirtualScroll';
import AddView from '@components/ViewList/ui/AddView';
import Details from '@components/ViewList/ui/Details';
import ViewItem from '@components/ViewList/ui/ViewItem';
import ViewList from '@components/ViewList/ViewList';
import ROUTES from '@shared/constants/routes';
import { useLanguage } from '@shared/Context/hooks';
import Icon from '@shared/ui/Icon';

const NavigationDrawer = () => {
  const { translation } = useLanguage();

  return (
    <article className="h-fit w-full text-on-surface-variant-text">
      <ul>
        <NavItem data-testid="nav-welcome" to={ROUTES.WELCOME_PAGE}>
          <Icon>spa</Icon> {translation.nav.navbar.welcome}
        </NavItem>

        <NavItem data-testid="nav-settings" to={ROUTES.SETTINGS}>
          <Icon>settings</Icon> {translation.nav.navbar.settings}
        </NavItem>

        <hr className="ml-4 border-outline-variant" />
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
