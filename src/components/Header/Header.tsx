import { useState } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import useAuth from '@/shared/Context/authHook';
import { useLanguage } from '@/shared/Context/hooks';
import Icon from '@/shared/ui/Icon';
import IconButton from '@/shared/ui/IconButton';
import DocsComp from '@components/DocsComp/DocsComp';
import ROUTES from '@shared/constants/routes';
import viewTransition from '@shared/lib/helpers/viewTransition';
import useScreen from '@shared/lib/hooks/useScreen';

import LangSwitcher from './ui/LangSwitcher';

const Header = () => {
  const [isDocsShown, setIsDocsShown] = useState(false);
  const { translation, language, changeLanguage } = useLanguage();
  const { pathname } = useLocation();
  const isSettings = pathname.slice(1) === ROUTES.SETTINGS;
  const navigate = useNavigate();
  const isMobile = useScreen() === 'mobile';
  const { logOut, isAuth } = useAuth();

  const { docsTip, logOutTip, langTip, homeTip } = translation.mainLayout.header.tooltips;

  function handleClick() {
    viewTransition(() => navigate(-1));
  }

  const isDocsToShow = isAuth;
  const isLogOutToShow = isAuth;
  const isHomeToShow = pathname !== '/';

  return (
    <>
      <header className="col-start-1 col-end-2 flex w-full items-center justify-end gap-2 py-2 pr-2 sm:col-end-3">
        {isSettings && !isMobile ? (
          <h1 style={{ viewTransitionName: 'title' }} className="mr-auto flex items-center pl-4 font-readex_pro">
            <button type="button" onClick={handleClick} className="flex h-12 w-12 items-center justify-center">
              <IconButton className="animate-fade-in-screen duration-500">
                <Icon>arrow_left_alts</Icon>
              </IconButton>
            </button>
            <span className="animate-fade-in-settings">Settings</span>
          </h1>
        ) : (
          <h1
            style={{
              viewTransitionName: 'title',
            }}
            className="ml-[53px] mr-auto animate-fade-in-title font-readex_pro sm:ml-7 lg:ml-4"
          >
            <Link to={ROUTES.WELCOME_PAGE}>GraphiQL</Link>
          </h1>
        )}
        <LangSwitcher language={language} changeLanguage={changeLanguage} tip={langTip} />
        {isHomeToShow && (
          <IconButton data-tooltip={homeTip} className="tooltipElemVert" onClick={() => navigate(ROUTES.WELCOME_PAGE)}>
            <Icon>home</Icon>
          </IconButton>
        )}
        {isDocsToShow && (
          <IconButton
            onClick={() => setIsDocsShown((prev) => !prev)}
            data-tooltip={docsTip}
            data-testid="show_docs"
            className="tooltipElemVert"
          >
            <Icon>article</Icon>
          </IconButton>
        )}
        {isLogOutToShow && (
          <IconButton onClick={() => logOut()} className="tooltipElemVert" data-tooltip={logOutTip}>
            <Icon>door_open</Icon>
          </IconButton>
        )}
      </header>
      <DocsComp isShown={isDocsShown} setIsDocsShown={setIsDocsShown} />
    </>
  );
};

export default Header;
