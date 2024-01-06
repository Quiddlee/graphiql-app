import { Link } from 'react-router-dom';

import Button from '@pages/WelcomePage/ui/Button';
import ROUTES from '@shared/constants/routes';
import useAuth from '@shared/Context/authHook';
import { useLanguage } from '@shared/Context/hooks';
import FilledButton from '@shared/ui/FilledButton';
import OutlinedButton from '@shared/ui/OutlinedButton';
import TextButton from '@shared/ui/TextButton';

const Header = () => {
  const { changeLanguage, language } = useLanguage();
  const { isAuth } = useAuth();

  const lang = language === 'en' ? 'Rus' : 'Eng';

  return (
    <header className="sticky left-0 top-0 z-50 flex h-20 w-full items-center bg-black bg-opacity-20 px-4 text-on-surface">
      <span className="font-readex_pro text-sm">GraphiQL</span>
      <article className="ml-auto flex items-center gap-3">
        <TextButton onClick={() => changeLanguage()}>{lang}</TextButton>
        {isAuth ? (
          <Link to={`${ROUTES.MAIN}`}>
            <Button className="h-[60px] w-[160px] text-sm">GraphiQL App</Button>
          </Link>
        ) : (
          <>
            <Link to={`${ROUTES.AUTH}/${ROUTES.LOGIN}`}>
              <OutlinedButton>Sign in</OutlinedButton>
            </Link>
            <Link to={`${ROUTES.AUTH}/${ROUTES.SIGNUP}`}>
              <FilledButton>Sign up</FilledButton>
            </Link>
          </>
        )}
      </article>
    </header>
  );
};

export default Header;
