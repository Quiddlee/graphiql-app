import NavItem from '@components/Nav/ui/NavItem';
import AddView from '@components/ViewList/ui/AddView';
import ViewItem from '@components/ViewList/ui/ViewItem';
import ViewList from '@components/ViewList/ViewList';
import ROUTES from '@shared/constants/routes';
import Icon from '@shared/ui/Icon';

const NavigationDrawer = () => {
  return (
    <div className="grid h-fit w-full text-on-surface-variant-text">
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
        render={(view, i) => (
          <ViewItem key={i} id={i}>
            <Icon>tab</Icon> {view.name}
          </ViewItem>
        )}
      >
        <AddView />
      </ViewList>
    </div>
  );
};

export default NavigationDrawer;
