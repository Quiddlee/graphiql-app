import NavigationBar from '@components/Nav/ui/NavigationBar';
import NavigationDrawer from '@components/Nav/ui/NavigationDrawer';
import useScreen from '@shared/lib/hooks/useScreen';

const Nav = () => {
  const screenType = useScreen();
  const isMobile = screenType === 'mobile';

  return (
    <nav className="h-full w-full">
      {isMobile && <NavigationBar />} <NavigationDrawer />
    </nav>
  );
};

export default Nav;
