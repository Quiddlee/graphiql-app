import NavItem from '@components/Nav/ui/NavItem';
import VirtualScroll from '@components/Nav/ui/VirtualScroll';
import AddView from '@components/ViewList/ui/AddView';
import Details from '@components/ViewList/ui/Details';
import ViewItem from '@components/ViewList/ui/ViewItem';
import ViewList from '@components/ViewList/ViewList';
import ROUTES from '@shared/constants/routes';
import Icon from '@shared/ui/Icon';

const NavigationDrawer = () => {
  return (
    <article className="grid h-fit w-full text-on-surface-variant-text">
      <ul>
        <NavItem to={ROUTES.WELCOME_PAGE}>
          <Icon>spa</Icon> Welcome
        </NavItem>

        <NavItem to={ROUTES.SETTINGS}>
          <Icon>settings</Icon> Settings
        </NavItem>

        <hr className="ml-4 border-outline-variant" />
      </ul>
      <ViewList
        render={(view) => (
          <ViewItem key={view.id} id={view.id}>
            <span className="animation-delay-200 flex animate-fade-in-standard items-center">
              <Icon>tab</Icon>
            </span>
            {view.name}
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
